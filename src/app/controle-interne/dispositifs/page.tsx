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
  title: "Dispositifs & types de contrôles",
  description:
    "Contrôles préventifs, détectifs et correctifs ; manuels ou automatisés ; séparation des tâches, autorisations, rapprochements, contrôles physiques et exemple concret du cycle achats.",
};

export default function DispositifsPage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 4"
        title="Dispositifs & types de contrôles"
        lead="Place au concret : quels sont les contrôles que l'on met réellement en place dans une organisation, et comment les classer."
      />
      <Article>
        <Section title="Classer les contrôles par moment d'action">
          <Grid>
            <Card title="Préventif" badge="avant">
              Empêche l'erreur ou la fraude de se produire.{" "}
              <em>Exemples :</em> séparation des tâches, autorisation préalable,
              contrôle d'accès, double signature.
            </Card>
            <Card title="Détectif" badge="pendant / après">
              Repère un problème qui s'est déjà produit.{" "}
              <em>Exemples :</em> rapprochement bancaire, inventaire physique,
              revue d'écarts, alertes informatiques.
            </Card>
            <Card title="Correctif" badge="après">
              Corrige et limite les conséquences d'un incident détecté.{" "}
              <em>Exemples :</em> plan d'action, sauvegardes/restauration,
              régularisation d'écritures.
            </Card>
            <Card title="Directif / dissuasif" badge="cadre">
              Oriente les comportements en amont.{" "}
              <em>Exemples :</em> code de conduite, politiques, formations,
              sensibilisation.
            </Card>
          </Grid>
        </Section>

        <Section title="Classer par mode d'exécution">
          <Grid>
            <Card title="Contrôles manuels">
              Réalisés par une personne (visa, revue, comptage). Souples, mais
              sensibles à l'erreur humaine et plus coûteux à grande échelle.
            </Card>
            <Card title="Contrôles automatisés">
              Intégrés au système d'information (blocage d'une saisie hors
              budget, contrôle de cohérence, droits d'accès). Fiables et
              constants, mais dépendent de la qualité du paramétrage.
            </Card>
          </Grid>
        </Section>

        <Section title="Les grands dispositifs à connaître">
          <div className="space-y-3">
            {[
              {
                t: "Séparation des tâches",
                d: "Aucune personne ne doit cumuler des fonctions incompatibles : autoriser, exécuter, enregistrer et contrôler une même opération. C'est LE principe phare, qui complique la fraude et l'erreur non détectée.",
              },
              {
                t: "Autorisations et approbations",
                d: "Chaque opération significative est validée par une personne habilitée, selon des seuils et délégations de pouvoir clairement définis.",
              },
              {
                t: "Rapprochements et contrôles de cohérence",
                d: "Comparer deux sources indépendantes (banque vs comptabilité, commande vs livraison vs facture) pour détecter les écarts.",
              },
              {
                t: "Contrôles physiques",
                d: "Protéger l'accès aux actifs : coffres, badges, inventaires, gestion des stocks et des immobilisations.",
              },
              {
                t: "Documentation et piste d'audit",
                d: "Tracer qui a fait quoi, quand et pourquoi. Sans traçabilité, un contrôle est invérifiable.",
              },
              {
                t: "Contrôles informatiques (ITGC)",
                d: "Gestion des accès et des habilitations, sécurité, gestion des changements et des sauvegardes : ils conditionnent la fiabilité des contrôles automatisés.",
              },
              {
                t: "Indicateurs et reporting",
                d: "Tableaux de bord et indicateurs de performance/risque qui signalent les dérives à temps.",
              },
            ].map((x) => (
              <details
                key={x.t}
                className="group rounded-xl border border-slate-200 bg-white p-4 [&_summary]:cursor-pointer"
              >
                <summary className="flex items-center justify-between font-semibold text-slate-900 marker:content-['']">
                  {x.t}
                  <span className="text-emerald-500 transition-transform group-open:rotate-90">
                    ›
                  </span>
                </summary>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-600">
                  {x.d}
                </p>
              </details>
            ))}
          </div>
        </Section>

        <Section title="Exemple concret : le cycle Achats">
          <Callout title="Comment les contrôles s'enchaînent" tone="success">
            <ol className="ml-4 list-decimal space-y-1">
              <li>
                <strong>Besoin exprimé</strong> par un service → bon de demande{" "}
                <em>(autorisation)</em>.
              </li>
              <li>
                <strong>Commande</strong> passée par les achats, pas par le
                demandeur <em>(séparation des tâches)</em>.
              </li>
              <li>
                <strong>Réception</strong> contrôlée par le magasin{" "}
                <em>(contrôle physique)</em>.
              </li>
              <li>
                <strong>Facture</strong> validée seulement si commande +
                réception + facture concordent <em>(rapprochement « 3 voies
                »)</em>.
              </li>
              <li>
                <strong>Paiement</strong> exécuté par un tiers selon des seuils
                de signature <em>(autorisation + séparation)</em>.
              </li>
            </ol>
            <p className="mt-2">
              Résultat : pour détourner des fonds, il faudrait une{" "}
              <strong>collusion</strong> entre plusieurs personnes — exactement
              ce que la séparation des tâches vise à rendre difficile.
            </p>
          </Callout>
        </Section>

        <PrevNext current={`${BASE}/dispositifs`} />
      </Article>
    </>
  );
}
