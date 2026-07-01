"use client";

import { useEffect, useState } from "react";

type Question = {
  q: string;
  options: string[];
  correct: number; // index de la bonne réponse dans `options`
  explication: string;
};

// Banque de questions : on en tire 10 au hasard à chaque partie, et l'ordre
// des propositions est mélangé — le quiz change donc à chaque fois.
const POOL: Question[] = [
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
      "Le COSO compte 5 composantes (déclinées en 17 principes depuis 2013).",
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
      "Les trois objectifs COSO sont : opérations, reporting et conformité.",
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
      "Séparer les fonctions incompatibles complique la fraude et l'erreur non détectée.",
  },
  {
    q: "Un rapprochement bancaire est un exemple de contrôle…",
    options: ["Préventif", "Détectif", "Directif", "Inutile"],
    correct: 1,
    explication:
      "Le rapprochement détecte un écart après coup : c'est un contrôle détectif.",
  },
  {
    q: "Quelle loi américaine de 2002 a renforcé le contrôle interne après Enron et WorldCom ?",
    options: [
      "Le FCPA",
      "La loi Sarbanes-Oxley (SOX)",
      "La LSF",
      "Le Dodd-Frank Act",
    ],
    correct: 1,
    explication:
      "La loi Sarbanes-Oxley (2002) responsabilise la direction sur le contrôle interne financier.",
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
      "L'audit interne forme la 3ᵉ ligne : il fournit une assurance indépendante.",
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
      "Le contournement par la direction est une limite majeure du contrôle interne.",
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
      "C'est l'environnement de contrôle : la culture et l'éthique qui fondent le dispositif.",
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
      "Le contrôle interne est l'affaire de tous ; la direction en assume la responsabilité finale.",
  },
  {
    q: "Qu'est-ce qu'un cycle d'exploitation ?",
    options: [
      "Un logiciel comptable",
      "Un ensemble d'opérations liées et répétitives concourant à une même fonction",
      "Une durée de 12 mois",
      "Un type d'amortissement",
    ],
    correct: 1,
    explication:
      "Un cycle regroupe des opérations liées (acheter, vendre, payer les salaires…) que l'on analyse ensemble.",
  },
  {
    q: "Le rapprochement « 3 voies » du cycle achats compare…",
    options: [
      "Trois devis concurrents",
      "La commande, le bon de réception et la facture",
      "Trois exercices comptables",
      "Trois signataires",
    ],
    correct: 1,
    explication:
      "Commande + réception + facture doivent concorder avant de payer le fournisseur.",
  },
  {
    q: "Quel contrôle protège le mieux le cycle trésorerie ?",
    options: [
      "La double signature au-delà d'un seuil",
      "La suppression des relevés bancaires",
      "Le paiement par une seule personne sans contrôle",
      "L'absence de rapprochement",
    ],
    correct: 0,
    explication:
      "La double signature et les rapprochements bancaires indépendants sécurisent la trésorerie.",
  },
  {
    q: "Dans le cycle paie, quel risque la séparation des tâches vise-t-elle surtout ?",
    options: [
      "Les salariés fictifs",
      "La hausse des impôts",
      "La panne du logiciel",
      "Le turnover",
    ],
    correct: 0,
    explication:
      "Séparer RH, préparation de la paie et paiement empêche notamment la création de salariés fictifs.",
  },
  {
    q: "Quelle est la différence entre contrôle interne et audit interne ?",
    options: [
      "Ce sont des synonymes",
      "Le contrôle interne est un dispositif permanent ; l'audit interne l'évalue périodiquement",
      "L'audit interne est permanent, le contrôle interne ponctuel",
      "Le contrôle interne ne concerne que la comptabilité",
    ],
    correct: 1,
    explication:
      "L'audit interne est une fonction qui évalue le dispositif de contrôle interne (J. Renard).",
  },
  {
    q: "Quel auteur francophone est une référence sur l'audit et le contrôle interne ?",
    options: [
      "Jacques Renard",
      "Luca Pacioli",
      "Henri Fayol",
      "Adam Smith",
    ],
    correct: 0,
    explication:
      "Jacques Renard, « Théorie et pratique de l'audit interne » (Éditions Eyrolles).",
  },
  {
    q: "Le risque qui subsiste après application des contrôles s'appelle…",
    options: [
      "Le risque inhérent",
      "Le risque résiduel",
      "Le risque zéro",
      "Le risque de marché",
    ],
    correct: 1,
    explication:
      "Le risque résiduel doit rester à un niveau acceptable ; le risque inhérent est celui d'avant contrôle.",
  },
  {
    q: "En France, quelle loi de 2003 est l'équivalent de Sarbanes-Oxley ?",
    options: [
      "La loi PACTE",
      "La Loi de Sécurité Financière (LSF)",
      "La loi Sapin II",
      "Le Code de commerce",
    ],
    correct: 1,
    explication:
      "La LSF (2003) impose un rapport sur les procédures de contrôle interne.",
  },
  {
    q: "Un inventaire physique des stocks est un contrôle plutôt…",
    options: ["Préventif", "Détectif", "Directif", "Décoratif"],
    correct: 1,
    explication:
      "L'inventaire détecte les écarts entre stock physique et stock comptable : contrôle détectif.",
  },
  {
    q: "Dans l'espace OHADA, qui joue un rôle central pour la fiabilité comptable ?",
    options: [
      "Le commissaire aux comptes",
      "Le maire",
      "La banque centrale uniquement",
      "Le client",
    ],
    correct: 0,
    explication:
      "Le commissaire aux comptes, avec le SYSCOHADA révisé et les Actes uniformes, encadre la fiabilité comptable.",
  },
  {
    q: "Que signifie « management override » ?",
    options: [
      "Une mise à jour logicielle",
      "Le contournement des contrôles par la direction elle-même",
      "Un style de management participatif",
      "Un contrôle automatisé",
    ],
    correct: 1,
    explication:
      "C'est une limite majeure : les dirigeants passent outre les contrôles qu'ils ont établis.",
  },
  {
    q: "L'évaluation des risques (composante COSO) inclut notamment…",
    options: [
      "Le risque de fraude",
      "Le choix du logo",
      "La politique salariale",
      "Le plan marketing",
    ],
    correct: 0,
    explication:
      "Elle identifie et analyse les risques, y compris le risque de fraude et de changement.",
  },
];

const NB_QUESTIONS = 10;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Construit une partie : 10 questions au hasard, propositions mélangées.
function buildRound(): Question[] {
  return shuffle(POOL)
    .slice(0, NB_QUESTIONS)
    .map((question) => {
      const correctValue = question.options[question.correct];
      const options = shuffle(question.options);
      return {
        ...question,
        options,
        correct: options.indexOf(correctValue),
      };
    });
}

export function Quiz() {
  // Vide au premier rendu (serveur + hydratation), puis tiré au sort côté
  // client dans useEffect pour éviter toute divergence d'hydratation.
  const [round, setRound] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const newRound = () => {
    setRound(buildRound());
    setAnswers(Array(NB_QUESTIONS).fill(null));
    setSubmitted(false);
  };

  useEffect(() => {
    // Tirage au sort volontairement côté client uniquement (après hydratation)
    // pour éviter toute divergence serveur/client due à Math.random.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    newRound();
  }, []);

  if (round.length === 0) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center text-slate-400">
        Préparation du quiz…
      </div>
    );
  }

  const score = answers.reduce(
    (acc: number, a, i) => acc + (a === round[i].correct ? 1 : 0),
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

  const restart = () => {
    newRound();
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const verdict =
    score >= 9
      ? { t: "Excellent ! Vous maîtrisez le sujet. 🎯", c: "text-brand-mint" }
      : score >= 6
        ? { t: "Bien ! Quelques notions à revoir. 👍", c: "text-sky-300" }
        : { t: "À retravailler — relisez les chapitres. 📚", c: "text-amber-300" };

  return (
    <div className="space-y-6">
      {submitted && (
        <div className="sticky top-20 z-10 rounded-2xl border border-brand/20 bg-brand-panel p-6 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">
            Votre score
          </p>
          <p className="mt-1 text-4xl font-extrabold text-white">
            {score}
            <span className="text-2xl text-slate-500">/{NB_QUESTIONS}</span>
          </p>
          <p className={`mt-2 font-semibold ${verdict.c}`}>{verdict.t}</p>
          <button
            type="button"
            onClick={restart}
            className="mt-4 rounded-lg bg-brand px-5 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-mint"
          >
            Rejouer (nouvelles questions)
          </button>
        </div>
      )}

      {round.map((question, qi) => {
        const chosen = answers[qi];
        return (
          <fieldset
            key={qi}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
            <legend className="sr-only">Question {qi + 1}</legend>
            <p className="font-semibold text-white">
              <span className="mr-2 text-brand-mint">{qi + 1}.</span>
              {question.q}
            </p>
            <div className="mt-3 grid gap-2">
              {question.options.map((opt, oi) => {
                const isChosen = chosen === oi;
                const isCorrect = oi === question.correct;
                let cls =
                  "border-white/10 text-slate-200 hover:border-brand/40 hover:bg-brand/5";
                if (submitted) {
                  if (isCorrect)
                    cls = "border-brand/50 bg-brand/15 text-white";
                  else if (isChosen)
                    cls = "border-rose-400/40 bg-rose-500/10 text-rose-100";
                  else cls = "border-white/10 text-slate-400 opacity-70";
                } else if (isChosen) {
                  cls = "border-brand/60 bg-brand/10 text-white";
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
                      <span className="ml-auto text-brand-mint">✓</span>
                    )}
                    {submitted && isChosen && !isCorrect && (
                      <span className="ml-auto text-rose-400">✕</span>
                    )}
                  </button>
                );
              })}
            </div>
            {submitted && (
              <p className="mt-3 rounded-lg bg-white/[0.04] p-3 text-sm leading-relaxed text-slate-300">
                <strong className="text-white">Explication : </strong>
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
            className="rounded-lg bg-brand px-8 py-3 font-semibold text-brand-black shadow-lg shadow-brand/20 transition-colors enabled:hover:bg-brand-mint disabled:cursor-not-allowed disabled:opacity-40"
          >
            Voir mon score
          </button>
          {!allAnswered && (
            <p className="text-sm text-slate-400">
              Répondez aux {NB_QUESTIONS} questions pour valider.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
