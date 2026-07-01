import type { Metadata } from "next";
import { Article, Callout, PageHero } from "../_components/ui";
import { Chat } from "../_components/Chat";

export const metadata: Metadata = {
  title: "Assistant RICHARD CI",
  description:
    "Posez vos questions sur le contrôle interne à l'assistant intelligent RICHARD CI. Réponses sourcées, fondées sur la base de connaissances du cours.",
};

export default function AssistantPage() {
  return (
    <>
      <PageHero
        eyebrow="Assistant intelligent"
        title="Discutez avec RICHARD CI"
        lead="Une question sur le contrôle interne ? L'assistant répond à partir de la base de connaissances du cours et cite ses sources."
      />
      <Article>
        <Chat />
        <div className="mt-6">
          <Callout title="Comment ça marche ?" tone="info">
            L'assistant s'appuie sur la <strong>base de connaissances</strong> de
            RICHARD CI (définitions, COSO, cycles, acteurs, limites, sources…) et
            indique les références utilisées. Il fonctionne immédiatement, sans
            configuration. Pour des réponses encore plus riches et
            conversationnelles, une clé d'API (variable{" "}
            <code className="rounded bg-white/10 px-1">ANTHROPIC_API_KEY</code>)
            peut être ajoutée au déploiement : l'assistant passe alors en mode IA
            générative, toujours ancré sur les mêmes sources.
          </Callout>
        </div>
      </Article>
    </>
  );
}
