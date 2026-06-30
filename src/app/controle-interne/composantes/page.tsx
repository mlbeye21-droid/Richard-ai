import type { Metadata } from "next";
import { Article, Callout, PageHero, PrevNext, Section } from "../_components/ui";
import { BASE } from "../_data/nav";

export const metadata: Metadata = {
  title: "Les 5 composantes du COSO",
  description:
    "Le référentiel COSO : environnement de contrôle, évaluation des risques, activités de contrôle, information & communication, pilotage — et ses 17 principes.",
};

const composantes = [
  {
    n: 1,
    titre: "Environnement de contrôle",
    icone: "🏛️",
    resume:
      "Le « ton donné au sommet ». La culture, l'intégrité, les valeurs éthiques et la structure de gouvernance qui fondent tout le dispositif.",
    principes: [
      "Démontrer un engagement envers l'intégrité et les valeurs éthiques.",
      "Exercer une responsabilité de surveillance (conseil / comité d'audit).",
      "Définir structures, pouvoirs et responsabilités.",
      "Démontrer un engagement envers la compétence.",
      "Instaurer une responsabilisation (accountability) de chacun.",
    ],
  },
  {
    n: 2,
    titre: "Évaluation des risques",
    icone: "🎯",
    resume:
      "Identifier et analyser les risques susceptibles d'empêcher l'atteinte des objectifs, y compris le risque de fraude et de changement.",
    principes: [
      "Définir des objectifs clairs permettant d'identifier les risques.",
      "Identifier et analyser les risques liés à ces objectifs.",
      "Évaluer le risque de fraude.",
      "Identifier et évaluer les changements significatifs.",
    ],
  },
  {
    n: 3,
    titre: "Activités de contrôle",
    icone: "⚙️",
    resume:
      "Les actions concrètes (procédures, autorisations, séparation des tâches, contrôles automatisés) qui réduisent les risques à un niveau acceptable.",
    principes: [
      "Sélectionner et développer des activités de contrôle.",
      "Sélectionner des contrôles généraux sur la technologie (SI).",
      "Décliner les contrôles via des politiques et procédures.",
    ],
  },
  {
    n: 4,
    titre: "Information & communication",
    icone: "📡",
    resume:
      "Produire et diffuser une information pertinente et fiable, en interne comme en externe, pour que chacun assume ses responsabilités de contrôle.",
    principes: [
      "Obtenir ou produire une information pertinente et de qualité.",
      "Communiquer l'information en interne.",
      "Communiquer avec les parties externes.",
    ],
  },
  {
    n: 5,
    titre: "Pilotage (monitoring)",
    icone: "🔄",
    resume:
      "Surveiller en continu et par évaluations ponctuelles que le dispositif fonctionne, et corriger les déficiences identifiées.",
    principes: [
      "Réaliser des évaluations continues et/ou ponctuelles.",
      "Évaluer et communiquer les déficiences en temps utile.",
    ],
  },
];

export default function ComposantesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 3"
        title="Les 5 composantes du référentiel COSO"
        lead="Le COSO structure le contrôle interne en cinq composantes interdépendantes, déclinées depuis 2013 en 17 principes. C'est le cœur de tout cours sur le sujet."
      />
      <Article>
        <Section>
          <Callout title="Le moyen mnémotechnique" tone="info">
            Pensez à <strong>« E.R.A.I.P »</strong> :{" "}
            <strong>E</strong>nvironnement, <strong>R</strong>isques,{" "}
            <strong>A</strong>ctivités de contrôle, <strong>I</strong>nformation
            &amp; communication, <strong>P</strong>ilotage. Les 5 composantes
            doivent toutes être présentes <em>et</em> fonctionner ensemble.
          </Callout>
        </Section>

        <Section title="Le cube COSO en bref">
          <p>
            Le COSO se représente souvent par un <strong>cube</strong> qui
            croise trois dimensions : les <strong>3 objectifs</strong>{" "}
            (opérations, reporting, conformité), les{" "}
            <strong>5 composantes</strong> ci-dessous, et la{" "}
            <strong>structure de l'organisation</strong> (entité, division,
            unité…). Le message : le contrôle interne doit être pensé à tous
            les niveaux, pour chaque objectif.
          </p>
        </Section>

        <Section title="Les composantes une à une">
          <div className="space-y-5">
            {composantes.map((c) => (
              <div
                key={c.n}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-emerald-50 text-2xl">
                    {c.icone}
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                      Composante {c.n}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {c.titre}
                    </h3>
                    <p className="mt-1 text-[0.98rem] leading-relaxed text-slate-600">
                      {c.resume}
                    </p>
                  </div>
                </div>
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <p className="mb-2 text-sm font-semibold text-slate-700">
                    Principes associés
                  </p>
                  <ul className="space-y-1.5">
                    {c.principes.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-600"
                      >
                        <span className="mt-1 text-emerald-500">✓</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title="Pourquoi 17 principes ?">
          <p>
            La version <strong>2013</strong> du COSO a ajouté ces 17 principes
            pour rendre l'évaluation du contrôle interne plus{" "}
            <strong>concrète et vérifiable</strong>. Pour qu'un contrôle interne
            soit jugé <em>efficace</em>, chaque composante doit être présente et
            fonctionner, et les 17 principes doivent être appliqués de manière
            pertinente.
          </p>
        </Section>

        <PrevNext current={`${BASE}/composantes`} />
      </Article>
    </>
  );
}
