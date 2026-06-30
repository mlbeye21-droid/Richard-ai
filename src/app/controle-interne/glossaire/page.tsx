import type { Metadata } from "next";
import { Article, PageHero, PrevNext, Section } from "../_components/ui";
import { BASE } from "../_data/nav";

export const metadata: Metadata = {
  title: "Glossaire",
  description:
    "Les définitions clés du contrôle interne : COSO, séparation des tâches, assurance raisonnable, audit interne, risque inhérent, piste d'audit, et plus.",
};

const termes: { terme: string; def: string }[] = [
  {
    terme: "Assurance raisonnable",
    def: "Niveau de confiance élevé mais non absolu qu'un dispositif de contrôle peut offrir quant à l'atteinte des objectifs. Reconnaît que le risque zéro n'existe pas.",
  },
  {
    terme: "Audit interne",
    def: "Activité indépendante et objective qui évalue l'efficacité du contrôle interne, de la gestion des risques et de la gouvernance, et formule des recommandations.",
  },
  {
    terme: "Cartographie des risques",
    def: "Représentation hiérarchisée des risques d'une organisation selon leur probabilité et leur impact, servant à prioriser les contrôles.",
  },
  {
    terme: "Collusion",
    def: "Entente entre plusieurs personnes pour contourner des contrôles, notamment la séparation des tâches. Limite majeure du contrôle interne.",
  },
  {
    terme: "Conformité (compliance)",
    def: "Respect des lois, règlements, normes et procédures internes applicables à l'organisation. L'un des trois objectifs du COSO.",
  },
  {
    terme: "Contournement par la direction (management override)",
    def: "Situation où des dirigeants passent outre les contrôles qu'ils ont eux-mêmes établis. Risque considéré comme particulièrement dangereux.",
  },
  {
    terme: "Contrôle détectif",
    def: "Contrôle visant à repérer une erreur ou une irrégularité après sa survenance (ex. rapprochement bancaire, inventaire).",
  },
  {
    terme: "Contrôle préventif",
    def: "Contrôle visant à empêcher la survenance d'une erreur ou d'une fraude (ex. autorisation préalable, séparation des tâches).",
  },
  {
    terme: "COSO",
    def: "Committee of Sponsoring Organizations of the Treadway Commission. Auteur du référentiel de contrôle interne le plus utilisé (1992, actualisé 2013) et du COSO ERM (gestion des risques).",
  },
  {
    terme: "Environnement de contrôle",
    def: "Première composante du COSO : culture, intégrité, valeurs éthiques et structure de gouvernance qui fondent le dispositif (« le ton au sommet »).",
  },
  {
    terme: "ERM (Enterprise Risk Management)",
    def: "Management des risques de l'entreprise : approche élargie du COSO reliant la gestion des risques à la stratégie et à la performance.",
  },
  {
    terme: "FCPA",
    def: "Foreign Corrupt Practices Act (1977, États-Unis) : loi anti-corruption qui a imposé la tenue de comptes fiables et un contrôle interne comptable.",
  },
  {
    terme: "IFACI",
    def: "Institut français de l'audit et du contrôle internes, qui diffuse normes et bonnes pratiques en France.",
  },
  {
    terme: "ITGC",
    def: "IT General Controls : contrôles généraux informatiques (accès, sécurité, gestion des changements, sauvegardes) qui conditionnent la fiabilité des contrôles automatisés.",
  },
  {
    terme: "LSF",
    def: "Loi de Sécurité Financière (France, 2003) : équivalent français de Sarbanes-Oxley, imposant un rapport sur les procédures de contrôle interne.",
  },
  {
    terme: "OHADA",
    def: "Organisation pour l'Harmonisation en Afrique du Droit des Affaires (17 États). Encadre, via ses Actes uniformes et le SYSCOHADA, la fiabilité comptable et la gouvernance.",
  },
  {
    terme: "Piste d'audit",
    def: "Ensemble de traces documentaires permettant de reconstituer une opération de bout en bout (qui, quoi, quand, pourquoi).",
  },
  {
    terme: "Risque inhérent",
    def: "Niveau de risque d'une activité avant la mise en place de tout contrôle.",
  },
  {
    terme: "Risque résiduel",
    def: "Niveau de risque qui subsiste après application des contrôles. C'est lui qui doit rester acceptable.",
  },
  {
    terme: "Sarbanes-Oxley (SOX)",
    def: "Loi américaine de 2002, votée après Enron et WorldCom, rendant la direction responsable de l'efficacité du contrôle interne sur l'information financière.",
  },
  {
    terme: "Séparation des tâches",
    def: "Principe selon lequel des fonctions incompatibles (autoriser, exécuter, enregistrer, contrôler) ne doivent pas être réunies par une même personne.",
  },
];

export default function GlossairePage() {
  const tries = [...termes].sort((a, b) =>
    a.terme.localeCompare(b.terme, "fr"),
  );

  return (
    <>
      <PageHero
        eyebrow="Annexe"
        title="Glossaire du contrôle interne"
        lead="Les définitions essentielles à maîtriser, classées par ordre alphabétique. Idéal pour une révision rapide avant un examen."
      />
      <Article>
        <Section>
          <dl className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {tries.map((t) => (
              <div key={t.terme} className="p-5">
                <dt className="font-bold text-slate-900">{t.terme}</dt>
                <dd className="mt-1 text-[0.98rem] leading-relaxed text-slate-600">
                  {t.def}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <PrevNext current={`${BASE}/glossaire`} />
      </Article>
    </>
  );
}
