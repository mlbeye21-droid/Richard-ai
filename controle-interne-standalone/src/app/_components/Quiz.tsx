"use client";

import { useState } from "react";

type Question = {
  q: string;
  options: string[];
  correct: number;
  explication: string;
};

const QUESTIONS: Question[] = [
  {
    q: "Quel niveau d'assurance le contrôle interne peut-il fournir ?",
    options: [
      "Une assurance absolue",
      "Une assurance raisonnable",
      "Aucune assurance",
      "Une garantie légale totale",
    ],
    correct: 1,
    explication:
      "Le contrôle interne ne fournit qu'une assurance raisonnable : il réduit les risques sans jamais les supprimer.",
  },
  {
    q: "Combien de composantes compte le référentiel COSO ?",
    options: ["3", "5", "7", "17"],
    correct: 1,
    explication:
      "Le COSO compte 5 composantes (déclinées en 17 principes depuis 2013) : environnement de contrôle, évaluation des risques, activités de contrôle, information & communication, pilotage.",
  },
  {
    q: "Lequel de ces objectifs ne fait PAS partie du triptyque COSO ?",
    options: [
      "Les opérations",
      "Le reporting (information)",
      "La conformité",
      "La maximisation du cours de Bourse",
    ],
    correct: 3,
    explication:
      "Les trois objectifs COSO sont : opérations, reporting et conformité. La maximisation du cours de Bourse n'en fait pas partie.",
  },
  {
    q: "Le principe de séparation des tâches consiste à…",
    options: [
      "Confier toutes les tâches à une seule personne de confiance",
      "Empêcher qu'une même personne autorise, exécute, enregistre et contrôle une opération",
      "Externaliser la comptabilité",
      "Automatiser tous les contrôles",
    ],
    correct: 1,
    explication:
      "Séparer les fonctions incompatibles complique la fraude et l'erreur non détectée : c'est un contrôle préventif fondamental.",
  },
  {
    q: "Un rapprochement bancaire est un exemple de contrôle…",
    options: ["Préventif", "Détectif", "Directif", "Inutile"],
    correct: 1,
    explication:
      "Le rapprochement détecte un écart après coup : c'est un contrôle détectif.",
  },
  {
    q: "Quelle loi américaine de 2002 a renforcé le contrôle interne après les scandales Enron et WorldCom ?",
    options: [
      "Le FCPA",
      "La loi Sarbanes-Oxley (SOX)",
      "La LSF",
      "Le Dodd-Frank Act",
    ],
    correct: 1,
    explication:
      "La loi Sarbanes-Oxley (2002) rend la direction responsable de l'efficacité du contrôle interne sur l'information financière.",
  },
  {
    q: "Dans le modèle des trois lignes de maîtrise, qui constitue la 3ᵉ ligne ?",
    options: [
      "Le management opérationnel",
      "Les fonctions conformité et risques",
      "L'audit interne",
      "Le commissaire aux comptes",
    ],
    correct: 2,
    explication:
      "L'audit interne forme la 3ᵉ ligne : il fournit une assurance indépendante sur l'efficacité du dispositif.",
  },
  {
    q: "Laquelle de ces affirmations est une LIMITE du contrôle interne ?",
    options: [
      "La séparation des tâches",
      "Le contournement par la direction (management override)",
      "Les rapprochements",
      "Les autorisations",
    ],
    correct: 1,
    explication:
      "Le contournement par la direction est une limite majeure : les dirigeants peuvent passer outre les contrôles qu'ils ont instaurés.",
  },
  {
    q: "Le « ton donné au sommet » (intégrité, valeurs éthiques) relève de quelle composante COSO ?",
    options: [
      "L'environnement de contrôle",
      "Les activités de contrôle",
      "Le pilotage",
      "L'évaluation des risques",
    ],
    correct: 0,
    explication:
      "C'est l'environnement de contrôle : la culture et l'éthique qui fondent tout le dispositif.",
  },
  {
    q: "Qui est responsable du contrôle interne dans une organisation ?",
    options: [
      "Uniquement l'audit interne",
      "Uniquement le commissaire aux comptes",
      "Tous les acteurs, la direction en étant responsable en dernier ressort",
      "Uniquement le service comptable",
    ],
    correct: 2,
    explication:
      "Le contrôle interne est l'affaire de tous ; la direction en assume toutefois la responsabilité finale.",
  },
];

export function Quiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(QUESTIONS.length).fill(null),
  );
  const [submitted, setSubmitted] = useState(false);

  const score = answers.reduce(
    (acc: number, a, i) => acc + (a === QUESTIONS[i].correct ? 1 : 0),
    0,
  );
  const allAnswered = answers.every((a) => a !== null);

  const select = (qi: number, oi: number) => {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[qi] = oi;
      return next;
    });
  };

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setSubmitted(false);
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const verdict =
    score >= 9
      ? { t: "Excellent ! Vous maîtrisez le sujet. 🎯", c: "text-emerald-700" }
      : score >= 6
        ? { t: "Bien ! Quelques notions à revoir. 👍", c: "text-sky-700" }
        : { t: "À retravailler — relisez les chapitres. 📚", c: "text-amber-700" };

  return (
    <div className="space-y-6">
      {submitted && (
        <div className="sticky top-20 z-10 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-md">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Votre score
          </p>
          <p className="mt-1 text-4xl font-extrabold text-slate-900">
            {score}
            <span className="text-2xl text-slate-400">/{QUESTIONS.length}</span>
          </p>
          <p className={`mt-2 font-semibold ${verdict.c}`}>{verdict.t}</p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 rounded-lg bg-emerald-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
          >
            Recommencer
          </button>
        </div>
      )}

      {QUESTIONS.map((question, qi) => {
        const chosen = answers[qi];
        return (
          <fieldset
            key={qi}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <legend className="sr-only">Question {qi + 1}</legend>
            <p className="font-semibold text-slate-900">
              <span className="mr-2 text-emerald-600">{qi + 1}.</span>
              {question.q}
            </p>
            <div className="mt-3 grid gap-2">
              {question.options.map((opt, oi) => {
                const isChosen = chosen === oi;
                const isCorrect = oi === question.correct;
                let cls =
                  "border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40";
                if (submitted) {
                  if (isCorrect)
                    cls = "border-emerald-400 bg-emerald-50 text-emerald-900";
                  else if (isChosen)
                    cls = "border-rose-300 bg-rose-50 text-rose-900";
                  else cls = "border-slate-200 opacity-70";
                } else if (isChosen) {
                  cls = "border-emerald-500 bg-emerald-50";
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => select(qi, oi)}
                    disabled={submitted}
                    className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-[0.97rem] transition-colors ${cls}`}
                  >
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-current text-xs font-bold">
                      {String.fromCharCode(65 + oi)}
                    </span>
                    <span>{opt}</span>
                    {submitted && isCorrect && (
                      <span className="ml-auto text-emerald-600">✓</span>
                    )}
                    {submitted && isChosen && !isCorrect && (
                      <span className="ml-auto text-rose-500">✕</span>
                    )}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
                <strong className="text-slate-800">Explication : </strong>
                {question.explication}
              </p>
            )}
          </fieldset>
        );
      })}

      {!submitted && (
        <div className="flex flex-col items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setSubmitted(true);
              if (typeof window !== "undefined") window.scrollTo({ top: 0 });
            }}
            disabled={!allAnswered}
            className="rounded-lg bg-emerald-600 px-8 py-3 font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors enabled:hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Voir mon score
          </button>
          {!allAnswered && (
            <p className="text-sm text-slate-500">
              Répondez aux {QUESTIONS.length} questions pour valider.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
