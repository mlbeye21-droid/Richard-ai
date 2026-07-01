import { KNOWLEDGE } from "../../_data/knowledge";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

// Normalisation : minuscules, sans accents, ponctuation en espaces.
function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const STOPWORDS = new Set([
  "le","la","les","un","une","des","de","du","et","ou","que","qui","quoi","est",
  "sur","pour","dans","avec","au","aux","en","ce","cet","cette","quel","quelle",
  "quels","quelles","comment","pourquoi","est-ce","c'est","son","ses","leur",
  "the","a","an","of","to","in","is","what","how","why",
]);

// Moteur de récupération : score chaque entrée de la base de connaissances.
function retrieve(query: string) {
  const qNorm = normalize(query);
  const qTokens = qNorm
    .split(" ")
    .filter((t) => t.length > 2 && !STOPWORDS.has(t));

  const scored = KNOWLEDGE.map((k) => {
    let score = 0;
    for (const kw of k.keywords) {
      const kwNorm = normalize(kw);
      if (kwNorm && qNorm.includes(kwNorm)) {
        score += 3 + kwNorm.split(" ").length; // expression exacte = fort signal
      }
    }
    const text = normalize(`${k.title} ${k.keywords.join(" ")} ${k.answer}`);
    for (const t of qTokens) {
      if (text.includes(t)) score += 1;
    }
    return { k, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored;
}

function buildLocalAnswer(query: string) {
  const scored = retrieve(query);
  const best = scored[0];

  if (!best || best.score < 3) {
    return {
      answer:
        "Je ne suis pas certain de bien saisir la question. Je réponds aux sujets du contrôle interne : définition, objectifs, composantes COSO, cycles de l'entreprise, dispositifs, acteurs, limites, histoire, OHADA… Peux-tu reformuler ou choisir l'un de ces thèmes ?",
      sources: [],
      related: KNOWLEDGE.slice(0, 4).map((k) => k.title),
      mode: "local" as const,
    };
  }

  // Réponse principale + éventuel complément proche.
  const parts = [best.k.answer];
  const sources = [best.k.source];
  const second = scored[1];
  if (second && second.score >= Math.max(3, best.score * 0.6)) {
    parts.push(`\n\nÀ rapprocher — ${second.k.title} : ${second.k.answer}`);
    if (!sources.includes(second.k.source)) sources.push(second.k.source);
  }

  return {
    answer: parts.join(""),
    sources,
    related: scored.slice(1, 4).map((x) => x.k.title),
    mode: "local" as const,
  };
}

// Optionnel : si une clé API Anthropic est configurée, on génère une réponse
// enrichie ancrée sur la base de connaissances (RAG). Sinon, réponse locale.
async function tryClaude(messages: ChatMessage[], contextEntries: string) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) return null;

  const model = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";
  const system = `Tu es l'assistant RICHARD CI, spécialisé dans le contrôle interne, pour des étudiants francophones.
Réponds en français, de façon claire, pédagogique et vivante, avec des exemples concrets quand c'est utile.
Appuie-toi en priorité sur le contexte ci-dessous ; si l'information n'y figure pas, dis-le honnêtement et invite à consulter le cours. N'invente pas de sources.

Contexte (base de connaissances RICHARD CI) :
${contextEntries}`;

  // L'API Anthropic exige que le 1er message soit "user" et n'accepte que les
  // rôles user/assistant. On repart donc du premier message utilisateur.
  const cleaned = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: String(m.content ?? "") }));
  const firstUser = cleaned.findIndex((m) => m.role === "user");
  const apiMessages = firstUser === -1 ? [] : cleaned.slice(firstUser);
  if (apiMessages.length === 0) return null;

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model,
        max_tokens: 1024,
        system,
        messages: apiMessages,
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const text = data?.content?.[0]?.text;
    return typeof text === "string" && text.trim() ? text.trim() : null;
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let body: { messages?: ChatMessage[]; question?: string };
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide." }, { status: 400 });
  }

  const messages: ChatMessage[] = Array.isArray(body.messages)
    ? body.messages
    : body.question
      ? [{ role: "user", content: body.question }]
      : [];

  const lastUser = [...messages].reverse().find((m) => m.role === "user");
  const query = (lastUser?.content ?? "").trim();
  if (!query) {
    return Response.json({ error: "Question vide." }, { status: 400 });
  }

  const local = buildLocalAnswer(query);

  // Contexte pour un éventuel LLM : les entrées les plus pertinentes.
  const top = retrieve(query).slice(0, 5);
  const contextEntries = (top.length ? top.map((x) => x.k) : KNOWLEDGE.slice(0, 5))
    .map((k) => `• ${k.title} : ${k.answer} (Source : ${k.source})`)
    .join("\n");

  const aiAnswer = await tryClaude(messages, contextEntries);

  return Response.json({
    answer: aiAnswer ?? local.answer,
    sources: local.sources,
    related: local.related,
    mode: aiAnswer ? "ai" : "local",
  });
}
