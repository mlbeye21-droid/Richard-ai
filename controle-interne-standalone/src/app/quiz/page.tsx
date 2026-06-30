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
        title="Quiz : 10 questions corrigées"
        lead="Répondez aux questions puis affichez votre score. Chaque réponse est expliquée pour vous aider à réviser ce qui n'est pas encore acquis."
      />
      <Article>
        <Quiz />
      </Article>
    </>
  );
}
