import type { Metadata } from "next";
import { Article, Callout, PageHero, PrevNext, Section } from "../_components/ui";

export const metadata: Metadata = {
  title: "Base de connaissances & sources",
  description:
    "Bibliographie sourcée du contrôle interne : Jacques Renard, COSO, IFACI, IIA, AMF, SOX, LSF, normes ISA, OHADA — et notions approfondies avec leurs références.",
};

// Bibliographie de référence. Chaque entrée cite clairement l'auteur/éditeur.
const bibliographie = [
  {
    auteur: "Jacques RENARD",
    titre: "Théorie et pratique de l'audit interne",
    edition: "Éditions Eyrolles",
    apport:
      "L'ouvrage francophone de référence. Il clarifie la distinction entre audit interne et contrôle interne, et présente le contrôle interne comme un dispositif permanent au service de la maîtrise des activités.",
    type: "Ouvrage",
  },
  {
    auteur: "Jacques RENARD",
    titre: "Comprendre et mettre en œuvre le contrôle interne",
    edition: "Éditions Eyrolles",
    apport:
      "Un guide pratique : les composantes du dispositif, la démarche de mise en œuvre, les dispositifs permanents et l'articulation avec l'audit interne.",
    type: "Ouvrage",
  },
  {
    auteur: "COSO (Committee of Sponsoring Organizations)",
    titre: "Internal Control — Integrated Framework",
    edition: "1992, actualisé en 2013",
    apport:
      "Le référentiel mondial : 3 objectifs, 5 composantes et 17 principes. Base de la plupart des cours et des réglementations sur le contrôle interne.",
    type: "Référentiel",
  },
  {
    auteur: "COSO",
    titre: "Enterprise Risk Management (COSO ERM)",
    edition: "2004, actualisé en 2017",
    apport:
      "Étend l'approche à la gestion des risques de l'entreprise et la relie à la stratégie et à la performance.",
    type: "Référentiel",
  },
  {
    auteur: "IIA — Institute of Internal Auditors",
    titre: "Le modèle des trois lignes (The Three Lines Model)",
    edition: "2020 (révision des « trois lignes de maîtrise »)",
    apport:
      "Clarifie les rôles : management opérationnel (1re ligne), fonctions de surveillance (2e ligne), audit interne (3e ligne).",
    type: "Référentiel",
  },
  {
    auteur: "IFACI",
    titre:
      "Cadre de référence international des pratiques professionnelles (CRIPP) et publications",
    edition: "Institut français de l'audit et du contrôle internes",
    apport:
      "Diffuse en France les normes de l'IIA et de nombreux guides pratiques sur le contrôle interne et l'audit interne.",
    type: "Organisme / normes",
  },
  {
    auteur: "AMF — Autorité des marchés financiers",
    titre: "Le dispositif de contrôle interne : cadre de référence",
    edition: "2007, actualisé en 2010",
    apport:
      "Cadre de référence français pour les sociétés cotées, avec un guide d'application relatif à la gestion des risques et au contrôle interne comptable et financier.",
    type: "Référentiel",
  },
  {
    auteur: "Congrès des États-Unis",
    titre: "Sarbanes-Oxley Act (SOX)",
    edition: "2002",
    apport:
      "Après Enron et WorldCom : responsabilise la direction sur le contrôle interne relatif à l'information financière (sections 302 et 404).",
    type: "Loi",
  },
  {
    auteur: "Législateur français",
    titre: "Loi de Sécurité Financière (LSF)",
    edition: "2003",
    apport:
      "Équivalent français de SOX : rapport sur les procédures de contrôle interne pour les sociétés faisant appel public à l'épargne.",
    type: "Loi",
  },
  {
    auteur: "IAASB",
    titre:
      "Normes internationales d'audit — ISA 315 & ISA 610",
    edition: "Normes ISA",
    apport:
      "ISA 315 : comprendre l'entité et son contrôle interne pour évaluer les risques. ISA 610 : utilisation des travaux de l'audit interne par l'auditeur externe.",
    type: "Normes",
  },
  {
    auteur: "OHADA",
    titre:
      "Acte uniforme sur les sociétés commerciales & SYSCOHADA révisé",
    edition: "OHADA (17 États), SYSCOHADA révisé 2017",
    apport:
      "Encadre la fiabilité comptable, la gouvernance et le rôle du commissaire aux comptes dans l'espace OHADA.",
    type: "Droit / référentiel",
  },
  {
    auteur: "Elisabeth BERTIN",
    titre: "Audit interne : enjeux et pratiques à l'international",
    edition: "Éditions Eyrolles",
    apport:
      "Approche académique et internationale de l'audit interne et de sa relation au contrôle interne.",
    type: "Ouvrage",
  },
];

// Notions approfondies, chacune rattachée à sa source.
const notions = [
  {
    n: "Contrôle interne ≠ audit interne",
    d: "Le contrôle interne est le dispositif permanent de maîtrise ; l'audit interne est une fonction périodique qui l'évalue. Confondre les deux est l'erreur classique.",
    src: "J. Renard, Théorie et pratique de l'audit interne (Eyrolles)",
  },
  {
    n: "Un dispositif permanent",
    d: "Le contrôle interne n'est pas un contrôle ponctuel : c'est un ensemble de dispositifs permanents, intégrés aux processus et vécus au quotidien.",
    src: "J. Renard (Eyrolles) ; COSO 2013",
  },
  {
    n: "Trois objectifs",
    d: "Opérations (efficacité), reporting (fiabilité de l'information), conformité (lois et règlements). La protection des actifs y est souvent rattachée.",
    src: "COSO, Internal Control — Integrated Framework (2013)",
  },
  {
    n: "Cinq composantes, dix-sept principes",
    d: "Environnement de contrôle, évaluation des risques, activités de contrôle, information & communication, pilotage — précisés par 17 principes depuis 2013.",
    src: "COSO 2013",
  },
  {
    n: "Assurance raisonnable",
    d: "Le contrôle interne réduit les risques à un niveau acceptable sans jamais les supprimer : l'assurance est raisonnable, pas absolue.",
    src: "COSO ; AMF, Cadre de référence (2010)",
  },
  {
    n: "Contournement par la direction",
    d: "Le « management override » est une limite majeure : les dirigeants peuvent passer outre les contrôles qu'ils ont établis.",
    src: "COSO ; normes ISA 315",
  },
  {
    n: "Les trois lignes de maîtrise",
    d: "Management opérationnel, fonctions de surveillance (risques/conformité), audit interne indépendant : une répartition claire des responsabilités.",
    src: "IIA, The Three Lines Model (2020)",
  },
  {
    n: "Approche par les cycles",
    d: "Le dispositif s'évalue processus par processus (achats, ventes, paie…), en identifiant à chaque étape risques et contrôles.",
    src: "Pratique d'audit ; normes ISA 315",
  },
];

const typeColor: Record<string, string> = {
  Ouvrage: "bg-brand/15 text-brand-mint",
  Référentiel: "bg-sky-500/15 text-sky-200",
  Loi: "bg-amber-500/15 text-amber-200",
  Normes: "bg-purple-500/15 text-purple-200",
  "Normes ": "bg-purple-500/15 text-purple-200",
  "Organisme / normes": "bg-purple-500/15 text-purple-200",
  "Droit / référentiel": "bg-amber-500/15 text-amber-200",
};

export default function RessourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Base de connaissances"
        title="Sources & notions approfondies"
        lead="Ce cours s'appuie sur des références reconnues. Voici la bibliographie — de Jacques Renard aux référentiels COSO et IFACI — et les notions clés reliées à leurs sources."
      />
      <Article>
        <Section>
          <Callout title="Comment utiliser cette page" tone="info">
            Pour aller plus loin ou citer tes sources dans un devoir, appuie-toi
            sur les ouvrages et référentiels ci-dessous. La section « Notions
            approfondies » relie chaque idée forte à sa référence.
          </Callout>
        </Section>

        <Section title="Bibliographie & référentiels">
          <div className="space-y-3">
            {bibliographie.map((b) => (
              <div
                key={`${b.auteur}-${b.titre}`}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <div className="mb-1 flex items-start justify-between gap-3">
                  <div>
                    <p className="font-bold text-white">{b.titre}</p>
                    <p className="text-sm text-brand-mint">{b.auteur}</p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      typeColor[b.type] ?? "bg-white/10 text-slate-200"
                    }`}
                  >
                    {b.type}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {b.edition}
                </p>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">
                  {b.apport}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Notions approfondies (avec leurs sources)">
          <div className="grid gap-3 sm:grid-cols-2">
            {notions.map((x) => (
              <div
                key={x.n}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="font-bold text-white">{x.n}</p>
                <p className="mt-1 text-[0.95rem] leading-relaxed text-slate-300">
                  {x.d}
                </p>
                <p className="mt-3 border-t border-white/10 pt-2 text-xs italic text-slate-500">
                  Source : {x.src}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Besoin d'une réponse précise ?">
          <Callout title="Demande à l'assistant RICHARD CI" tone="success">
            L'<a href="/assistant">assistant intelligent</a> répond à tes
            questions sur le contrôle interne et cite les notions de cette base
            de connaissances.
          </Callout>
        </Section>

        <PrevNext current="/ressources" />
      </Article>
    </>
  );
}
