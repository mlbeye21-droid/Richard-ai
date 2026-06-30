import type { Metadata } from "next";
import { Article, Callout, PageHero, PrevNext, Section } from "../_components/ui";
import { BASE } from "../_data/nav";

export const metadata: Metadata = {
  title: "Histoire du contrôle interne",
  description:
    "Des premiers contrôles comptables au référentiel COSO, à la loi Sarbanes-Oxley, à la LSF française et au droit OHADA : l'évolution du contrôle interne.",
};

const timeline = [
  {
    date: "Antiquité — Moyen Âge",
    title: "Les premiers contrôles comptables",
    text: "Bien avant la formalisation moderne, scribes égyptiens, administrations romaines et marchands italiens pratiquent déjà séparation des tâches, double enregistrement et vérification des comptes. La comptabilité en partie double (Luca Pacioli, 1494) introduit un autocontrôle arithmétique.",
  },
  {
    date: "XIXᵉ – début XXᵉ s.",
    title: "Révolution industrielle et grandes entreprises",
    text: "L'essor des sociétés par actions et des chemins de fer sépare propriétaires et dirigeants. Il faut rendre des comptes à des actionnaires absents : naissent l'audit externe et des procédures internes pour protéger les actifs et fiabiliser les chiffres.",
  },
  {
    date: "1929 – 1949",
    title: "La crise et la naissance du concept moderne",
    text: "Le krach de 1929 conduit aux États-Unis à la création de la SEC (1934) et à l'obligation d'audit. En 1949, l'American Institute of Accountants donne l'une des premières définitions formelles de l'« internal control », couvrant à la fois la protection des actifs et l'efficacité opérationnelle.",
  },
  {
    date: "1977",
    title: "Foreign Corrupt Practices Act (FCPA)",
    text: "À la suite de scandales de corruption, cette loi américaine impose aux entreprises de tenir des livres fiables et de maintenir un système de contrôle interne comptable. Le contrôle interne devient une obligation légale, et non plus une simple bonne pratique.",
  },
  {
    date: "1985 – 1987",
    title: "La Commission Treadway",
    text: "Face à la multiplication des fraudes au reporting financier, la National Commission on Fraudulent Financial Reporting (commission Treadway) recommande un cadre de référence commun. Elle donne naissance au COSO (Committee of Sponsoring Organizations).",
  },
  {
    date: "1992",
    title: "Le référentiel COSO « Internal Control — Integrated Framework »",
    text: "Référence mondiale, il définit le contrôle interne comme un processus visant trois objectifs (opérations, reporting, conformité) et l'articule autour de 5 composantes. C'est le socle encore enseigné aujourd'hui.",
  },
  {
    date: "2001 – 2002",
    title: "Enron, WorldCom et la loi Sarbanes-Oxley (SOX)",
    text: "Les faillites retentissantes d'Enron et de WorldCom révèlent des défaillances majeures. La loi Sarbanes-Oxley (2002) rend la direction personnellement responsable de l'efficacité du contrôle interne sur l'information financière (sections 302 et 404), avec attestation et audit externe.",
  },
  {
    date: "2003",
    title: "France : la Loi de Sécurité Financière (LSF)",
    text: "Équivalent français de SOX, la LSF impose au président du conseil un rapport sur les procédures de contrôle interne. L'AMF publiera ensuite un cadre de référence (2007, actualisé 2010) pour les sociétés cotées.",
  },
  {
    date: "2004 puis 2017",
    title: "COSO ERM — la gestion des risques",
    text: "Le COSO étend son approche au management des risques de l'entreprise (Enterprise Risk Management). La version 2017 relie explicitement le contrôle interne à la stratégie et à la performance.",
  },
  {
    date: "2013",
    title: "COSO actualisé : 17 principes",
    text: "La mise à jour conserve les 5 composantes mais les précise par 17 principes fondamentaux, afin d'évaluer plus rigoureusement l'efficacité du dispositif dans un monde numérique et mondialisé.",
  },
  {
    date: "Espace OHADA",
    title: "Le contrôle interne en Afrique francophone",
    text: "Dans les 17 États de l'OHADA, l'Acte uniforme relatif au droit des sociétés commerciales, le SYSCOHADA révisé et le rôle du commissaire aux comptes encadrent la fiabilité comptable. Le contrôle interne y est un enjeu clé de gouvernance et de confiance des investisseurs.",
  },
];

export default function HistoirePage() {
  return (
    <>
      <PageHero
        eyebrow="Chapitre 1"
        title="Une histoire de confiance et de scandales"
        lead="Le contrôle interne ne s'est pas inventé d'un coup : il s'est construit, crise après crise, à mesure que les organisations grandissaient et que la confiance devait être organisée plutôt que supposée."
      />
      <Article>
        <Section>
          <p>
            Comprendre l'histoire du contrôle interne, c'est comprendre{" "}
            <strong>pourquoi</strong> il existe. À chaque grande défaillance —
            fraude, faillite, corruption — la réponse a été la même : mieux
            encadrer, mieux documenter, mieux vérifier. Voici les grandes
            étapes.
          </p>
        </Section>

        <Section title="Frise chronologique">
          <ol className="relative space-y-8 border-l-2 border-emerald-200 pl-6">
            {timeline.map((e) => (
              <li key={e.title} className="relative">
                <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full border-2 border-white bg-emerald-500 shadow" />
                <span className="text-xs font-bold uppercase tracking-wide text-emerald-600">
                  {e.date}
                </span>
                <h3 className="mt-1 font-bold text-slate-900">{e.title}</h3>
                <p className="mt-1 text-[0.98rem] leading-relaxed text-slate-600">
                  {e.text}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        <Section title="Ce qu'il faut retenir">
          <Callout title="L'idée centrale" tone="success">
            Le contrôle interne est passé d'une simple <em>vérification
            comptable</em> à un <strong>dispositif global de maîtrise des
            activités et des risques</strong>, devenu une obligation légale dans
            la plupart des grandes économies. Son histoire est rythmée par les
            scandales financiers, dont chacun a renforcé les exigences.
          </Callout>
          <p>
            Retenez trois jalons pour un examen : <strong>1992</strong> (cadre
            COSO), <strong>2002</strong> (Sarbanes-Oxley après Enron) et,
            côté français, <strong>2003</strong> (Loi de Sécurité Financière).
          </p>
        </Section>

        <PrevNext current={`${BASE}/histoire`} />
      </Article>
    </>
  );
}
