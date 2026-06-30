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
  title: "Définition & objectifs",
  description:
    "Qu'est-ce que le contrôle interne ? Définitions COSO, AMF et IFACI, objectifs (opérations, information, conformité, protection des actifs) et idées reçues.",
};

export default function DefinitionPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 2"
        title="Définition & objectifs"
        lead="Avant de parler dispositifs et référentiels, il faut s'accorder sur les mots : ce que recouvre exactement le contrôle interne, et ce qu'on attend de lui."
      />
      <Article>
        <Section title="Une définition de référence">
          <p>
            La définition la plus utilisée est celle du{" "}
            <strong>COSO</strong> :
          </p>
          <blockquote className="rounded-r-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-5 text-slate-800">
            « Le contrôle interne est un <strong>processus</strong> mis en œuvre
            par le conseil d'administration, les dirigeants et le personnel
            d'une organisation, destiné à fournir une{" "}
            <strong>assurance raisonnable</strong> quant à la réalisation
            d'objectifs liés aux opérations, au reporting et à la conformité. »
          </blockquote>
          <p>
            En France, l'<strong>AMF</strong> (Autorité des marchés financiers)
            en donne une définition proche, insistant sur la maîtrise des
            activités, l'efficacité des opérations et l'utilisation efficiente
            des ressources. L'<strong>IFACI</strong> (Institut français de
            l'audit et du contrôle internes) la relaie auprès des praticiens.
          </p>
        </Section>

        <Section title="Décortiquons la définition">
          <Grid>
            <Card title="Un processus" badge="≠ état">
              Ce n'est pas un document ni un service, mais un ensemble
              d'actions <strong>permanentes</strong> intégrées au
              fonctionnement de l'organisation.
            </Card>
            <Card title="Mis en œuvre par des personnes" badge="humain">
              Du conseil d'administration au dernier employé : le contrôle
              interne dépend des <strong>comportements</strong>, pas seulement
              des outils.
            </Card>
            <Card title="Assurance raisonnable" badge="≠ absolue">
              Il <strong>réduit</strong> les risques sans les supprimer. Le
              risque zéro n'existe pas (voir le chapitre Limites).
            </Card>
            <Card title="Orienté objectifs" badge="finalité">
              Il n'existe pas pour lui-même : il sert l'atteinte d'objectifs
              clairs et mesurables de l'organisation.
            </Card>
          </Grid>
        </Section>

        <Section title="Les objectifs du contrôle interne">
          <p>
            On retient classiquement <strong>trois grandes familles</strong>{" "}
            d'objectifs (le triptyque COSO), auxquelles s'ajoute la protection
            du patrimoine :
          </p>
          <Grid>
            <Card title="1. Opérations">
              Efficacité et efficience des activités : performance, qualité,
              bon emploi des ressources, protection contre les pertes.
            </Card>
            <Card title="2. Information (reporting)">
              Fiabilité, exhaustivité et disponibilité de l'information
              financière <em>et</em> non financière, interne comme externe.
            </Card>
            <Card title="3. Conformité">
              Respect des lois, règlements, normes et procédures internes
              applicables à l'organisation.
            </Card>
            <Card title="4. Protection des actifs">
              Sauvegarde du patrimoine : actifs physiques, financiers,
              données, et réputation, contre la perte, la fraude ou le vol.
            </Card>
          </Grid>
        </Section>

        <Section title="Ce que le contrôle interne n'est PAS">
          <Callout title="Attention aux idées reçues" tone="warning">
            <ul className="ml-4 list-disc space-y-1">
              <li>
                Ce n'est <strong>pas l'audit interne</strong> : l'audit{" "}
                <em>évalue</em> le contrôle interne, il n'est qu'un de ses
                acteurs.
              </li>
              <li>
                Ce n'est <strong>pas seulement comptable</strong> : il couvre
                toutes les activités (RH, production, achats, SI…).
              </li>
              <li>
                Ce n'est <strong>pas une garantie</strong> : il offre une
                assurance <em>raisonnable</em>, jamais une certitude.
              </li>
              <li>
                Ce n'est <strong>pas un frein</strong> : bien conçu, il
                sécurise sans alourdir inutilement.
              </li>
            </ul>
          </Callout>
        </Section>

        <PrevNext current={`${BASE}/definition`} />
      </Article>
    </>
  );
}
