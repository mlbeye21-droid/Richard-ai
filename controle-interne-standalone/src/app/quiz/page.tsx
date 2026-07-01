import type { Metadata } from "next";
import { Article, PageHero } from "../_components/ui";
import { Quiz } from "../_components/Quiz";

export const metadata: Metadata = {
  title: "Quiz",
  description:
    "Testez vos connaissances sur le contrôle interne : 10 questions à choix multiples, corrigées et expliquées.",
};

export default function QuizPage() {
  return (
    <>
      <PageHero
        eyebrow="Auto-évaluation"
        title="Quiz : 10 questions à chaque fois différentes"
        lead="10 questions tirées au hasard d'une banque, avec des propositions mélangées : le quiz change à chaque partie. Répondez, affichez votre score, et chaque réponse est expliquée."
      />
      <Article>
        <Quiz />
      </Article>
    </>
  );
}
