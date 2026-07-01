"use client";

import { useEffect, useRef, useState } from "react";
import { InfinityMark } from "./Logo";

type Msg = {
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  related?: string[];
};

const SUGGESTIONS = [
  "Qu'est-ce que le contrôle interne ?",
  "Quelles sont les 5 composantes du COSO ?",
  "Explique la séparation des tâches",
  "Quels contrôles pour le cycle achats ?",
  "Quelle différence entre audit interne et contrôle interne ?",
  "Quelles sont les limites du contrôle interne ?",
];

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Bonjour 👋 Je suis l'assistant RICHARD CI. Pose-moi une question sur le contrôle interne — définition, COSO, cycles, dispositifs, acteurs, limites, histoire, OHADA… Choisis un sujet ci-dessous ou écris ta question.",
};

export function Chat() {
  const [messages, setMessages] = useState<Msg[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const question = text.trim();
    if (!question || loading) return;

    const history = [...messages, { role: "user", content: question } as Msg];
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: history.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer ??
            "Désolé, une erreur est survenue. Réessaie dans un instant.",
          sources: data.sources,
          related: data.related,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Impossible de contacter l'assistant pour le moment. Vérifie ta connexion et réessaie.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[70vh] min-h-[520px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      {/* Fil de discussion */}
      <div className="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex gap-3 ${
              m.role === "user" ? "flex-row-reverse" : ""
            }`}
          >
            {m.role === "assistant" && (
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/15">
                <InfinityMark className="h-5 w-8" />
              </span>
            )}
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-[0.97rem] leading-relaxed ${
                m.role === "user"
                  ? "bg-brand text-brand-black"
                  : "bg-white/[0.06] text-slate-200"
              }`}
            >
              <p className="whitespace-pre-wrap">{m.content}</p>

              {m.sources && m.sources.length > 0 && (
                <p className="mt-2 border-t border-white/10 pt-2 text-xs italic text-brand-mint">
                  Sources : {m.sources.join(" · ")}
                </p>
              )}

              {m.related && m.related.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {m.related.map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => send(r)}
                      className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs text-slate-300 transition-colors hover:border-brand/40 hover:text-brand-mint"
                    >
                      {r}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand/15">
              <InfinityMark className="h-5 w-8" />
            </span>
            <div className="rounded-2xl bg-white/[0.06] px-4 py-3 text-slate-400">
              <span className="inline-flex gap-1">
                <span className="animate-bounce">•</span>
                <span className="animate-bounce [animation-delay:120ms]">•</span>
                <span className="animate-bounce [animation-delay:240ms]">•</span>
              </span>
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      {/* Suggestions (uniquement au démarrage) */}
      {messages.length <= 1 && (
        <div className="flex flex-wrap gap-2 border-t border-white/10 px-4 py-3">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => send(s)}
              className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs text-slate-200 transition-colors hover:bg-brand/15 hover:text-brand-mint"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Zone de saisie */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
        className="flex items-center gap-2 border-t border-white/10 bg-brand-black/40 p-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pose ta question sur le contrôle interne…"
          className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-slate-100 placeholder:text-slate-500 focus:border-brand/50 focus:outline-none"
          aria-label="Votre question"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-xl bg-brand px-4 py-2.5 font-semibold text-brand-black transition-colors enabled:hover:bg-brand-mint disabled:cursor-not-allowed disabled:opacity-40"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}
