import type { Metadata } from "next";
import { Article, Callout, PageHero, PrevNext, Section } from "../_components/ui";
import { BASE } from "../_data/nav";

export const metadata: Metadata = {
  title: "Acteurs & responsabilités",
  description:
    "Qui est responsable du contrôle interne ? Conseil, direction, management, audit interne, commissaire aux comptes — et le modèle des trois lignes de maîtrise.",
};

const lignes = [
  {
    n: "1ʳᵉ ligne",
    titre: "Le management opérationnel",
    couleur: "bg-emerald-500",
    qui: "Tous les responsables et collaborateurs qui « font ».",
    role: "Ils détiennent et gèrent les risques au quotidien. Ce sont eux qui exécutent les contrôles intégrés aux processus (autorisations, rapprochements, vérifications).",
  },
  {
    n: "2ᵉ ligne",
    titre: "Les fonctions de surveillance",
    couleur: "bg-sky-500",
    qui: "Risk management, conformité (compliance), contrôle de gestion, qualité, sécurité.",
    role: "Elles définissent le cadre, conseillent, surveillent et aident la première ligne à maîtriser ses risques. Elles ne sont pas indépendantes de la direction.",
  },
  {
    n: "3ᵉ ligne",
    titre: "L'audit interne",
    couleur: "bg-indigo-500",
    qui: "La fonction d'audit interne, rattachée au comité d'audit.",
    role: "Elle fournit une assurance indépendante et objective sur l'efficacité de la gouvernance, du contrôle interne et de la gestion des risques. Elle évalue, elle n'exécute pas les contrôles.",
  },
];

export default function ActeursPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 5"
        title="Qui est responsable du contrôle interne ?"
        lead="Réponse courte : tout le monde. Réponse précise : chacun à son niveau, selon le modèle des « trois lignes de maîtrise »."
      />
      <Article>
        <Section title="Un principe fondateur">
          <Callout title="Le contrôle interne est l'affaire de tous" tone="success">
            Contrairement à une idée reçue, le contrôle interne n'est pas
            « le travail de l'auditeur ». Du conseil d'administration au dernier
            employé, <strong>chacun en est un acteur</strong>. La direction en
            est toutefois <strong>responsable en dernier ressort</strong>.
          </Callout>
        </Section>

        <Section title="Les acteurs clés">
          <div className="space-y-3">
            {[
              {
                t: "Conseil d'administration / de surveillance",
                d: "Fixe le cap, supervise les dirigeants et veille à l'existence d'un dispositif de contrôle interne adéquat.",
              },
              {
                t: "Comité d'audit",
                d: "Émanation du conseil, il suit l'efficacité du contrôle interne et de l'audit, et dialogue avec les commissaires aux comptes.",
              },
              {
                t: "Direction générale",
                d: "Conçoit, met en place et fait vivre le dispositif. Elle donne le « ton au sommet » et répond de son efficacité.",
              },
              {
                t: "Management & employés",
                d: "Appliquent les contrôles au quotidien dans leurs processus. Sans leur adhésion, aucun dispositif ne tient.",
              },
              {
                t: "Audit interne",
                d: "Évalue de façon indépendante l'efficacité du dispositif et formule des recommandations. Il n'est pas responsable des contrôles eux-mêmes.",
              },
              {
                t: "Commissaire aux comptes / auditeur externe",
                d: "Acteur externe : il apprécie le contrôle interne dans la mesure utile à sa mission de certification des comptes. En zone OHADA, son rôle est central pour la fiabilité comptable.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-xl border border-slate-200 bg-white p-4"
              >
                <p className="font-semibold text-slate-900">{x.t}</p>
                <p className="mt-1 text-[0.98rem] leading-relaxed text-slate-600">
                  {x.d}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Le modèle des trois lignes de maîtrise">
          <p>
            Popularisé par l'IIA (Institute of Internal Auditors), ce modèle
            clarifie « qui fait quoi » pour éviter les zones d'ombre et les
            doublons.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {lignes.map((l) => (
              <div
                key={l.n}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
              >
                <div className={`${l.couleur} px-5 py-3 text-white`}>
                  <p className="text-xs font-bold uppercase tracking-wide opacity-90">
                    {l.n}
                  </p>
                  <p className="font-bold">{l.titre}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold text-slate-700">Qui ?</p>
                  <p className="text-sm text-slate-600">{l.qui}</p>
                  <p className="mt-3 text-sm font-semibold text-slate-700">
                    Rôle
                  </p>
                  <p className="text-sm text-slate-600">{l.role}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">
            Au-dessus des trois lignes, le <strong>conseil</strong> et la{" "}
            <strong>direction</strong> assurent la gouvernance d'ensemble ;
            l'<strong>auditeur externe</strong> intervient, lui, depuis
            l'extérieur.
          </p>
        </Section>

        <PrevNext current={`${BASE}/acteurs`} />
      </Article>
    </>
  );
}
