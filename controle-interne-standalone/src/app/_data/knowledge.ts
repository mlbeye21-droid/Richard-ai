// Base de connaissances de l'assistant RICHARD CI.
// Chaque entrée : mots-clés pour la recherche, réponse pédagogique, et source.
// Utilisée par la route /api/chat (moteur de récupération, sans dépendance
// externe) et, si une clé API est configurée, comme contexte pour un LLM.

export type Knowledge = {
  id: string;
  title: string;
  keywords: string[];
  answer: string;
  source: string;
};

export const KNOWLEDGE: Knowledge[] = [
  {
    id: "definition",
    title: "Définition du contrôle interne",
    keywords: [
      "definition",
      "c'est quoi",
      "qu'est ce que",
      "controle interne",
      "expliquer",
      "signifie",
      "notion",
    ],
    answer:
      "Le contrôle interne est un processus mis en œuvre par le conseil d'administration, les dirigeants et le personnel, destiné à fournir une assurance raisonnable quant à la réalisation d'objectifs liés aux opérations, au reporting et à la conformité. C'est un dispositif permanent de maîtrise des activités, et non un simple contrôle ponctuel.",
    source: "COSO 2013 ; J. Renard, Théorie et pratique de l'audit interne (Eyrolles)",
  },
  {
    id: "objectifs",
    title: "Les objectifs du contrôle interne",
    keywords: [
      "objectif",
      "objectifs",
      "but",
      "buts",
      "a quoi sert",
      "finalite",
      "role",
      "utilite",
    ],
    answer:
      "On distingue trois familles d'objectifs (triptyque COSO) : 1) les opérations (efficacité et efficience) ; 2) le reporting (fiabilité de l'information financière et non financière) ; 3) la conformité (respect des lois et règlements). On y ajoute souvent la protection des actifs (sauvegarde du patrimoine).",
    source: "COSO, Internal Control — Integrated Framework (2013)",
  },
  {
    id: "composantes",
    title: "Les 5 composantes du COSO",
    keywords: [
      "composante",
      "composantes",
      "coso",
      "cinq",
      "5",
      "environnement",
      "pilotage",
      "cube",
      "17 principes",
      "principes",
    ],
    answer:
      "Le COSO structure le contrôle interne en 5 composantes : 1) l'environnement de contrôle (culture, éthique, « ton au sommet ») ; 2) l'évaluation des risques ; 3) les activités de contrôle ; 4) l'information & la communication ; 5) le pilotage (monitoring). Depuis 2013, elles sont précisées par 17 principes.",
    source: "COSO 2013",
  },
  {
    id: "environnement",
    title: "L'environnement de contrôle",
    keywords: [
      "environnement",
      "ton au sommet",
      "tone at the top",
      "culture",
      "ethique",
      "integrite",
      "valeurs",
    ],
    answer:
      "L'environnement de contrôle est la première composante du COSO : c'est le « ton donné au sommet ». Il regroupe l'intégrité, les valeurs éthiques, la structure de gouvernance, les compétences et la responsabilisation. Sans un environnement sain, les autres contrôles perdent leur efficacité.",
    source: "COSO 2013, composante 1",
  },
  {
    id: "risques",
    title: "L'évaluation des risques",
    keywords: [
      "risque",
      "risques",
      "evaluation des risques",
      "cartographie",
      "risque inherent",
      "risque residuel",
      "fraude",
    ],
    answer:
      "L'évaluation des risques consiste à identifier et analyser les risques qui menacent les objectifs, y compris le risque de fraude et de changement. On distingue le risque inhérent (avant contrôle) et le risque résiduel (après contrôle), qui doit rester à un niveau acceptable. La cartographie des risques hiérarchise ces risques par probabilité et impact.",
    source: "COSO 2013, composante 2",
  },
  {
    id: "activites",
    title: "Les activités de contrôle",
    keywords: [
      "activite de controle",
      "activites de controle",
      "procedure",
      "procedures",
      "controles",
      "dispositif",
    ],
    answer:
      "Les activités de contrôle sont les actions concrètes qui réduisent les risques : autorisations, séparation des tâches, rapprochements, contrôles physiques, contrôles informatiques, revues de performance. Elles se déclinent en politiques et procédures et peuvent être manuelles ou automatisées.",
    source: "COSO 2013, composante 3",
  },
  {
    id: "separation",
    title: "La séparation des tâches",
    keywords: [
      "separation des taches",
      "separation",
      "taches incompatibles",
      "cumul",
      "segregation",
      "fonctions incompatibles",
    ],
    answer:
      "La séparation des tâches est le principe selon lequel une même personne ne doit pas cumuler des fonctions incompatibles : autoriser, exécuter, enregistrer et contrôler une même opération. En les séparant, on rend la fraude et l'erreur non détectée beaucoup plus difficiles (il faudrait une collusion). C'est un contrôle préventif fondamental.",
    source: "COSO 2013 ; J. Renard (Eyrolles)",
  },
  {
    id: "types-controles",
    title: "Contrôles préventifs, détectifs, correctifs",
    keywords: [
      "preventif",
      "detectif",
      "correctif",
      "type de controle",
      "types de controles",
      "directif",
    ],
    answer:
      "On classe les contrôles par moment d'action : préventif (empêche l'erreur, ex. autorisation, séparation des tâches), détectif (repère après coup, ex. rapprochement bancaire, inventaire), correctif (répare, ex. plan d'action, sauvegardes) et directif/dissuasif (oriente les comportements, ex. code de conduite, formations).",
    source: "Pratique du contrôle interne ; COSO",
  },
  {
    id: "audit-vs-ci",
    title: "Contrôle interne vs audit interne",
    keywords: [
      "audit interne",
      "difference",
      "audit",
      "vs",
      "distinction",
      "confondre",
    ],
    answer:
      "Le contrôle interne est le dispositif permanent de maîtrise des activités, vécu au quotidien par toute l'organisation. L'audit interne est une fonction indépendante et périodique qui ÉVALUE ce dispositif et formule des recommandations. Autrement dit : l'audit interne n'est qu'un des acteurs du contrôle interne, pas le contrôle interne lui-même.",
    source: "J. Renard, Théorie et pratique de l'audit interne (Eyrolles)",
  },
  {
    id: "acteurs",
    title: "Les acteurs du contrôle interne",
    keywords: [
      "acteur",
      "acteurs",
      "responsable",
      "qui fait",
      "direction",
      "conseil",
      "comite d'audit",
      "employes",
    ],
    answer:
      "Le contrôle interne est l'affaire de tous : conseil d'administration (surveillance), comité d'audit, direction générale (responsable en dernier ressort), management et employés (appliquent les contrôles), audit interne (évalue), et commissaire aux comptes / auditeur externe (regard externe). La direction en assume la responsabilité finale.",
    source: "COSO ; AMF, Cadre de référence (2010)",
  },
  {
    id: "trois-lignes",
    title: "Le modèle des trois lignes de maîtrise",
    keywords: [
      "trois lignes",
      "3 lignes",
      "lignes de maitrise",
      "three lines",
      "ligne de defense",
      "lignes de defense",
    ],
    answer:
      "Le modèle des trois lignes répartit les rôles : 1re ligne = le management opérationnel qui détient et gère les risques ; 2e ligne = les fonctions de surveillance (risques, conformité, contrôle de gestion) ; 3e ligne = l'audit interne, qui fournit une assurance indépendante. Le conseil et la direction assurent la gouvernance d'ensemble.",
    source: "IIA, The Three Lines Model (2020)",
  },
  {
    id: "limites",
    title: "Les limites du contrôle interne",
    keywords: [
      "limite",
      "limites",
      "faiblesse",
      "assurance raisonnable",
      "risque zero",
      "management override",
      "contournement",
      "collusion",
    ],
    answer:
      "Le contrôle interne n'offre qu'une assurance RAISONNABLE, jamais absolue. Ses limites : l'erreur humaine, la collusion entre plusieurs personnes, le contournement par la direction (management override), l'arbitrage coût/bénéfice, les événements imprévus et l'obsolescence des contrôles. D'où l'importance de le réévaluer en continu.",
    source: "COSO ; AMF (2010)",
  },
  {
    id: "cycle-def",
    title: "Qu'est-ce qu'un cycle ?",
    keywords: [
      "cycle",
      "cycles",
      "processus",
      "cycle d'exploitation",
      "qu'est ce qu'un cycle",
    ],
    answer:
      "Un cycle est un ensemble cohérent d'opérations liées et répétitives concourant à une même fonction (acheter, vendre, payer les salaires…). Le contrôle interne s'évalue cycle par cycle : pour chacun on identifie le flux d'opérations, les risques à chaque étape, puis les contrôles qui les maîtrisent. C'est l'approche « par les processus ».",
    source: "Pratique d'audit ; normes ISA 315",
  },
  {
    id: "cycle-achats",
    title: "Le cycle achats / fournisseurs",
    keywords: [
      "achat",
      "achats",
      "fournisseur",
      "fournisseurs",
      "procure to pay",
      "3 voies",
      "trois voies",
    ],
    answer:
      "Le cycle achats va de l'expression du besoin au paiement. Risques : achats fictifs, double paiement, fournisseurs fictifs, réception non conforme. Contrôles clés : séparation demandeur/acheteur/réceptionnaire/payeur, rapprochement « 3 voies » (commande / bon de réception / facture), autorisations par seuils, référencement des fournisseurs.",
    source: "RICHARD CI — chapitre Cycles",
  },
  {
    id: "cycle-ventes",
    title: "Le cycle ventes / clients",
    keywords: [
      "vente",
      "ventes",
      "client",
      "clients",
      "order to cash",
      "facturation",
      "recouvrement",
      "creances",
    ],
    answer:
      "Le cycle ventes va de la commande client à l'encaissement. Risques : ventes non facturées, livraisons sans vérifier la solvabilité, détournement d'encaissements, retards de recouvrement. Contrôles clés : vérification des limites de crédit, facturation liée à la livraison, rapprochement commandes/livraisons/factures, suivi des créances (balance âgée).",
    source: "RICHARD CI — chapitre Cycles",
  },
  {
    id: "cycle-paie",
    title: "Le cycle paie / personnel",
    keywords: [
      "paie",
      "paye",
      "salaire",
      "salaires",
      "personnel",
      "rh",
      "salaries fictifs",
    ],
    answer:
      "Le cycle paie va de l'embauche au versement des salaires et charges. Risques : salariés fictifs, heures ou primes indues, erreurs de cotisations. Contrôles clés : séparation RH / préparation de la paie / paiement, rapprochement effectifs/bulletins/virements, validation des éléments variables, contrôle des déclarations sociales.",
    source: "RICHARD CI — chapitre Cycles",
  },
  {
    id: "cycle-tresorerie",
    title: "Le cycle trésorerie",
    keywords: [
      "tresorerie",
      "banque",
      "caisse",
      "paiement",
      "virement",
      "rapprochement bancaire",
      "encaissement",
      "decaissement",
    ],
    answer:
      "Le cycle trésorerie couvre encaissements, décaissements, banques et caisses. Risques : détournement de fonds, paiements non autorisés, fraude sur les virements. Contrôles clés : double signature au-delà d'un seuil, rapprochements bancaires fréquents et indépendants, séparation entre celui qui paie et celui qui rapproche.",
    source: "RICHARD CI — chapitre Cycles",
  },
  {
    id: "coso-histoire",
    title: "L'histoire du COSO et des réglementations",
    keywords: [
      "histoire",
      "coso 1992",
      "enron",
      "worldcom",
      "sarbanes",
      "sox",
      "lsf",
      "treadway",
      "origine",
    ],
    answer:
      "Le contrôle interne s'est construit crise après crise : FCPA (1977), commission Treadway (1985-87) puis référentiel COSO (1992, actualisé 2013). Les faillites d'Enron et WorldCom mènent à la loi Sarbanes-Oxley (2002) aux États-Unis, et à la Loi de Sécurité Financière (2003) en France.",
    source: "RICHARD CI — chapitre Histoire",
  },
  {
    id: "ohada",
    title: "Le contrôle interne dans l'espace OHADA",
    keywords: [
      "ohada",
      "syscohada",
      "afrique",
      "commissaire aux comptes",
      "acte uniforme",
    ],
    answer:
      "Dans les 17 États de l'OHADA, l'Acte uniforme relatif au droit des sociétés commerciales, le SYSCOHADA révisé (2017) et le rôle du commissaire aux comptes encadrent la fiabilité comptable et la gouvernance. Le contrôle interne y est un enjeu clé de confiance des investisseurs.",
    source: "OHADA ; SYSCOHADA révisé",
  },
  {
    id: "renard",
    title: "Jacques Renard et le contrôle interne",
    keywords: [
      "renard",
      "jacques renard",
      "auteur",
      "livre",
      "ouvrage",
      "reference",
      "bibliographie",
    ],
    answer:
      "Jacques Renard est l'auteur francophone de référence, notamment de « Théorie et pratique de l'audit interne » (Eyrolles). Il insiste sur la distinction entre audit interne et contrôle interne, et présente ce dernier comme un dispositif permanent au service de la maîtrise des activités. Voir la page Ressources pour la bibliographie complète.",
    source: "J. Renard, Éditions Eyrolles",
  },
  {
    id: "assurance-raisonnable",
    title: "L'assurance raisonnable",
    keywords: [
      "assurance raisonnable",
      "raisonnable",
      "garantie",
      "certitude",
      "absolu",
    ],
    answer:
      "Le contrôle interne fournit une assurance « raisonnable », pas absolue : il réduit les risques à un niveau acceptable mais ne peut pas garantir l'absence totale d'erreur ou de fraude, à cause de ses limites intrinsèques (erreur humaine, collusion, contournement par la direction, coût/bénéfice).",
    source: "COSO ; AMF (2010)",
  },
];
