import type { Metadata } from "next";
import { Article, Callout, PageHero, PrevNext, Section } from "../_components/ui";

export const metadata: Metadata = {
  title: "Les cycles de l'entreprise",
  description:
    "Qu'est-ce qu'un cycle d'exploitation ? Définition et contrôle interne appliqué aux principaux cycles : achats, ventes, stocks, immobilisations, paie, trésorerie, financement.",
};

const cycles = [
  {
    nom: "Achats / Fournisseurs",
    icone: "🛒",
    desc: "De l'expression du besoin au paiement du fournisseur (procure-to-pay).",
    risques: [
      "Achats fictifs ou non autorisés",
      "Double paiement d'une facture",
      "Détournement via des fournisseurs fictifs",
      "Réception non conforme à la commande",
    ],
    controles: [
      "Séparation : demandeur ≠ acheteur ≠ réceptionnaire ≠ payeur",
      "Rapprochement « 3 voies » : commande / bon de réception / facture",
      "Autorisation par seuils et délégations de pouvoir",
      "Référencement et revue périodique des fournisseurs",
    ],
  },
  {
    nom: "Ventes / Clients",
    icone: "🧾",
    desc: "De la commande client à l'encaissement (order-to-cash).",
    risques: [
      "Ventes non facturées ou mal facturées",
      "Livraisons sans solvabilité vérifiée (impayés)",
      "Détournement d'encaissements",
      "Retards de recouvrement",
    ],
    controles: [
      "Vérification des limites de crédit avant livraison",
      "Facturation automatique liée à la livraison",
      "Rapprochement commandes / livraisons / factures / encaissements",
      "Suivi des créances et relances (balance âgée)",
    ],
  },
  {
    nom: "Stocks",
    icone: "📦",
    desc: "Réception, stockage, mouvements et valorisation des marchandises.",
    risques: [
      "Vols, pertes, obsolescence",
      "Écarts entre stock physique et stock comptable",
      "Sur- ou sous-évaluation du stock",
    ],
    controles: [
      "Inventaires physiques réguliers et inventaire tournant",
      "Accès physique restreint aux magasins",
      "Suivi des mouvements et des dates de péremption",
      "Provisions pour dépréciation documentées",
    ],
  },
  {
    nom: "Immobilisations",
    icone: "🏭",
    desc: "Acquisition, suivi, amortissement et cession des actifs durables.",
    risques: [
      "Immobilisations non enregistrées ou fictives",
      "Cessions non tracées",
      "Amortissements erronés",
    ],
    controles: [
      "Fichier des immobilisations tenu à jour et étiquetage",
      "Autorisation des investissements (budget, comité)",
      "Rapprochement inventaire physique / fichier comptable",
      "Contrôle des cessions et mises au rebut",
    ],
  },
  {
    nom: "Paie / Personnel",
    icone: "👥",
    desc: "De l'embauche au versement des salaires et charges sociales.",
    risques: [
      "Salariés fictifs",
      "Heures ou primes indues",
      "Erreurs de calcul des cotisations",
      "Non-conformité au droit du travail",
    ],
    controles: [
      "Séparation : gestion RH ≠ préparation paie ≠ paiement",
      "Rapprochement effectifs / bulletins / virements",
      "Validation des éléments variables (heures, primes)",
      "Contrôle des déclarations sociales et fiscales",
    ],
  },
  {
    nom: "Trésorerie",
    icone: "💳",
    desc: "Encaissements, décaissements, banques et caisses.",
    risques: [
      "Détournement de fonds",
      "Paiements non autorisés",
      "Erreurs ou fraudes sur les virements",
    ],
    controles: [
      "Double signature au-delà d'un seuil",
      "Rapprochements bancaires fréquents et indépendants",
      "Séparation : celui qui paie ≠ celui qui rapproche",
      "Sécurisation des moyens de paiement et des accès bancaires",
    ],
  },
  {
    nom: "Financement / Capitaux",
    icone: "🏦",
    desc: "Emprunts, capitaux propres, placements et engagements.",
    risques: [
      "Engagements hors autorisation",
      "Non-respect des covenants bancaires",
      "Mauvaise information financière",
    ],
    controles: [
      "Autorisation des emprunts par les organes compétents",
      "Suivi des échéances et des ratios",
      "Traçabilité des décisions (procès-verbaux)",
    ],
  },
];

export default function CyclesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 4"
        title="Les cycles de l'entreprise"
        lead="En audit et en contrôle interne, on n'analyse pas l'entreprise « en bloc » : on la découpe en cycles. Comprendre cette logique est indispensable."
      />
      <Article>
        <Section title="Qu'est-ce qu'un cycle ?">
          <p>
            Un <strong>cycle</strong> (ou cycle d'exploitation) est un{" "}
            <strong>ensemble cohérent d'opérations liées entre elles</strong>,
            qui se répètent et concourent à une même fonction de l'entreprise —
            par exemple « acheter », « vendre » ou « payer les salaires ».
            Chaque cycle a un début, une fin, des acteurs, des documents et des
            enregistrements comptables.
          </p>
          <p>
            On parle de « cycle » parce que ces opérations forment une{" "}
            <strong>boucle qui se répète</strong> : commander → recevoir →
            enregistrer → payer → recommencer. Le décrire permet de repérer, à
            chaque étape, <strong>où sont les risques</strong> et{" "}
            <strong>quels contrôles</strong> les maîtrisent.
          </p>
          <Callout title="Pourquoi découper en cycles ?" tone="success">
            L'auditeur et le responsable du contrôle interne évaluent le
            dispositif <strong>cycle par cycle</strong>. C'est plus rigoureux :
            on suit le flux réel des opérations, on identifie les tâches
            incompatibles à séparer, et on ne laisse aucune étape sans contrôle.
            C'est l'approche dite <em>« par les processus »</em>.
          </Callout>
        </Section>

        <Section title="La logique commune à tout cycle">
          <p>
            Pour chaque cycle, on se pose toujours les mêmes questions :
          </p>
          <ol className="ml-5 list-decimal space-y-1">
            <li>
              Quelles sont les <strong>étapes</strong> (le flux, de A à Z) ?
            </li>
            <li>
              Quels <strong>risques</strong> à chaque étape (erreur, fraude,
              perte) ?
            </li>
            <li>
              Quels <strong>contrôles</strong> réduisent ces risques ?
            </li>
            <li>
              Qui fait quoi — la <strong>séparation des tâches</strong>{" "}
              est-elle respectée ?
            </li>
          </ol>
        </Section>

        <Section title="Les principaux cycles, avec risques et contrôles">
          <div className="space-y-4">
            {cycles.map((c) => (
              <div
                key={c.nom}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand/15 text-2xl">
                    {c.icone}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{c.nom}</h3>
                    <p className="mt-0.5 text-[0.98rem] text-slate-300">
                      {c.desc}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid gap-4 border-t border-white/10 pt-4 sm:grid-cols-2">
                  <div>
                    <p className="mb-2 text-sm font-semibold text-amber-300">
                      ⚠️ Risques
                    </p>
                    <ul className="space-y-1.5">
                      {c.risques.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="mt-1 text-amber-400/70">•</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-semibold text-brand-mint">
                      ✓ Contrôles clés
                    </p>
                    <ul className="space-y-1.5">
                      {c.controles.map((ct) => (
                        <li
                          key={ct}
                          className="flex items-start gap-2 text-sm text-slate-300"
                        >
                          <span className="mt-1 text-brand">✓</span>
                          {ct}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="À retenir">
          <Callout title="L'essentiel" tone="info">
            Un cycle = un ensemble d'opérations liées et répétitives. Le contrôle
            interne s'évalue <strong>cycle par cycle</strong> : pour chacun, on
            identifie le flux, les risques, puis les contrôles — la{" "}
            <strong>séparation des tâches</strong> revenant dans presque tous les
            cycles comme parade centrale.
          </Callout>
        </Section>

        <PrevNext current="/cycles" />
      </Article>
    </>
  );
}
