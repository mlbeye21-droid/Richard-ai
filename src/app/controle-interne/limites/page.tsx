import type { Metadata } from "next";
import {
  Article,
  Callout,
  Card,
  Grid,
  PageHero,
  PrevNext,
  Section,
} from "../_components/ui";
import { BASE } from "../_data/nav";

export const metadata: Metadata = {
  title: "Les limites du contrôle interne",
  description:
    "Pourquoi le contrôle interne n'offre qu'une assurance raisonnable : erreur humaine, collusion, contournement par la direction, coût/bénéfice et événements imprévus.",
};

export default function LimitesPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 6"
        title="Pourquoi le risque zéro n'existe pas"
        lead="Même parfaitement conçu, un contrôle interne ne donne qu'une « assurance raisonnable ». Comprendre ses limites, c'est éviter d'y placer une confiance aveugle."
      />
      <Article>
        <Section>
          <Callout title="Le mot clé : assurance « raisonnable »" tone="warning">
            Toutes les définitions du contrôle interne emploient ce terme à
            dessein. Un dispositif réduit les risques, il ne les{" "}
            <strong>élimine pas</strong>. Voici pourquoi.
          </Callout>
        </Section>

        <Section title="Les limites intrinsèques">
          <Grid>
            <Card title="L'erreur humaine">
              Fatigue, inattention, mauvaise compréhension d'une procédure : un
              contrôle réalisé par une personne peut simplement être mal fait.
            </Card>
            <Card title="La collusion">
              La séparation des tâches protège… tant que les personnes
              n'agissent pas ensemble. Plusieurs complices peuvent contourner
              les contrôles conçus pour les séparer.
            </Card>
            <Card title="Le contournement par la direction">
              C'est la limite la plus redoutable : les dirigeants peuvent passer
              outre les contrôles qu'ils ont eux-mêmes instaurés{" "}
              <em>(management override)</em>. De nombreux scandales en
              découlent.
            </Card>
            <Card title="Le rapport coût / bénéfice">
              Un contrôle coûte (temps, argent, lourdeur). On ne contrôle pas
              tout : on arbitre. Un contrôle plus cher que le risque qu'il
              couvre n'a pas de sens.
            </Card>
            <Card title="Les événements imprévus">
              Les contrôles sont conçus pour des risques connus. Une situation
              nouvelle (crise, fraude inédite, nouvelle techno) peut les prendre
              en défaut.
            </Card>
            <Card title="L'obsolescence">
              L'organisation évolue ; un contrôle pertinent hier peut devenir
              inutile ou inadapté s'il n'est pas régulièrement réévalué.
            </Card>
          </Grid>
        </Section>

        <Section title="La conséquence pratique">
          <p>
            Parce que ces limites existent, le contrôle interne doit être{" "}
            <strong>vivant</strong> : régulièrement évalué (composante{" "}
            <em>Pilotage</em>), ajusté aux risques réels, et soutenu par une
            culture d'intégrité. C'est précisément le rôle de l'audit interne
            et de la gouvernance que de surveiller ces angles morts.
          </p>
          <Callout title="À retenir pour l'examen" tone="info">
            Si on vous demande « le contrôle interne garantit-il l'absence de
            fraude ? », la réponse est <strong>non</strong> : il fournit une{" "}
            <strong>assurance raisonnable</strong>, limitée notamment par la
            collusion, le contournement par la direction, l'erreur humaine et
            l'arbitrage coût/bénéfice.
          </Callout>
        </Section>

        <PrevNext current={`${BASE}/limites`} />
      </Article>
    </>
  );
}
