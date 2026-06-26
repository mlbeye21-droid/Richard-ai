"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Environment } from "@react-three/drei";
import { Richard3DModel } from "@/components/Richard3DModel";

export default function Home() {
  return (
    <main className="w-full h-screen bg-[#0D1B18] overflow-hidden font-sans selection:bg-[#10B981] selection:text-white">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <Environment preset="city" />

        <ScrollControls pages={10} damping={0.3}>
          <Richard3DModel />
          <Scroll html style={{ width: "100%" }}>

            {/* 1. HERO */}
            <section className="h-screen flex flex-col items-center justify-center px-6 text-center">
              <span className="text-[#10B981] font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">Zone OHADA · 17 pays</span>
              <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-xl">RICHARD AI</h1>
              <p className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light">L'IA au service des métiers de la gestion.</p>
              <p className="text-base md:text-lg text-gray-400 max-w-2xl font-light mt-4">Assistant comptable, juridique &amp; fiscal pour la zone OHADA.</p>
            </section>

            {/* 2. PROBLÈME */}
            <section className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full md:w-2/3 pointer-events-none">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Le fardeau de la recherche.</h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">En moyenne, <strong className="text-[#10B981]">2,5 heures perdues</strong> chaque jour à fouiller dans les Actes Uniformes, le SYSCOHADA et les codes fiscaux.</p>
              <ul className="space-y-3 text-lg md:text-xl text-gray-300 font-light">
                <li className="flex items-start gap-3"><span className="text-[#10B981] mt-1">—</span> Des erreurs comptables et fiscales fréquentes dans les PME.</li>
                <li className="flex items-start gap-3"><span className="text-[#10B981] mt-1">—</span> Un ralentissement de la productivité dans les cabinets.</li>
                <li className="flex items-start gap-3"><span className="text-[#10B981] mt-1">—</span> Un accès inégal à l'information selon les moyens de chacun.</li>
                <li className="flex items-start gap-3"><span className="text-[#10B981] mt-1">—</span> Un apprentissage difficile faute d'outils adaptés.</li>
              </ul>
            </section>

            {/* 3. SOLUTION — 4 VERSIONS */}
            <section className="h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center w-full pointer-events-none">
              <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-3 block">La solution</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">Une intelligence qui grandit avec vous.</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-full max-w-6xl">
                {[
                  { v: "V1", t: "Le Documentaire", d: "Restitution fidèle des textes officiels.", s: "MVP publié" },
                  { v: "V2", t: "L'Interprète", d: "Explication et interprétation des textes.", s: "En développement" },
                  { v: "V3", t: "L'Expert Comptable", d: "Écritures comptables et cas pratiques.", s: "Prévu — Oct. 2026" },
                  { v: "V3+", t: "Workspace", d: "Orchestration de flux de travail complets.", s: "Roadmap 2027" },
                ].map((c) => (
                  <div key={c.v} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl text-left shadow-2xl">
                    <span className="text-[#10B981] font-bold text-sm tracking-widest">{c.v}</span>
                    <h3 className="text-xl font-bold text-white mt-2 mb-2">{c.t}</h3>
                    <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">{c.d}</p>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">{c.s}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. VERSION 1 */}
            <section className="h-screen flex flex-col items-end justify-center px-10 md:px-32 text-right w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 1 · MVP publié — Jan. 2026</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Le Documentaire.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">La vérité brute, instantanément. Une architecture RAG garantissant une <strong className="text-[#10B981]">fidélité textuelle à 100%</strong>, source citée à chaque réponse.</p>
                <p className="text-base md:text-lg text-gray-400 font-light">Recherche par article · thématique · navigation inter-textes — sur les Actes Uniformes, le SYSCOHADA révisé et le Code Général des Impôts.</p>
              </div>
            </section>

            {/* 5. VERSION 2 */}
            <section className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 2 · En développement — 2026</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">L'Interprète.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">Comprendre, pas seulement lire. Chaque texte est expliqué en quatre volets : ce qu'il dit, ce que cela signifie, dans quel contexte, et pourquoi c'est important.</p>
                <p className="text-base md:text-lg text-gray-400 font-light">Mode apprentissage : quiz, exercices et fiches de révision pour les étudiants et les équipes en formation.</p>
              </div>
            </section>

            {/* 6. VERSION 3 */}
            <section className="h-screen flex flex-col items-end justify-center px-10 md:px-32 text-right w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 3 · Prévu — Oct. 2026</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">L'Expert Comptable.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">Richard génère vos écritures conformes au <strong className="text-[#10B981]">SYSCOHADA révisé</strong>, détecte les anomalies et explique l'impact sur vos états financiers.</p>
                <p className="text-base md:text-lg text-gray-400 font-light">Génération d'écritures · correction &amp; détection d'anomalies · cas pratiques complets, de la création d'entreprise à la clôture.</p>
              </div>
            </section>

            {/* 7. WORKSPACE */}
            <section className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 3+ · Roadmap 2027</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Workspace.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-6">De la phrase au fichier Excel. Richard orchestre des flux complets : il analyse, génère les écritures, calcule les impacts et produit vos fichiers exploitables — en <strong className="text-[#10B981]">moins de 60 secondes</strong>.</p>
                <p className="text-base md:text-lg text-gray-400 font-light">Langage naturel · export Excel automatique · mémoire de session · gestion fiscale adaptée à chaque pays OHADA.</p>
              </div>
            </section>

            {/* 8. MARCHÉ & MODÈLE */}
            <section className="h-screen flex flex-col items-center justify-center px-6 md:px-20 text-center w-full pointer-events-none">
              <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-3 block">Le marché</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-12">300 millions de personnes.</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mb-12">
                {[
                  { n: "17", l: "pays OHADA" },
                  { n: "300M+", l: "personnes" },
                  { n: "290K", l: "étudiants au Sénégal" },
                  { n: "+17K", l: "professionnels de la gestion" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="text-4xl md:text-5xl font-extrabold text-[#10B981]">{s.n}</p>
                    <p className="text-sm md:text-base text-gray-400 font-light mt-2">{s.l}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg md:text-xl text-gray-300 font-light max-w-3xl">Un modèle <strong className="text-white">Freemium</strong> pour les étudiants, un <strong className="text-white">abonnement</strong> pour les professionnels et PME, des <strong className="text-white">licences</strong> pour les universités et cabinets.</p>
            </section>

            {/* 9. ROADMAP */}
            <section className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full pointer-events-none">
              <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-3 block">La trajectoire</span>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">Une roadmap claire.</h2>
              <div className="space-y-5 max-w-2xl">
                {[
                  { d: "Jan. 2026", t: "MVP V1 en ligne — bêta ouverte, premiers utilisateurs." },
                  { d: "Juil. 2026", t: "V2 L'Interprète disponible — monétisation démarrée." },
                  { d: "T1 2027", t: "V3 L'Expert Comptable — partenariats universités." },
                  { d: "T4 2027", t: "Richard Workspace — 5 000 utilisateurs actifs visés." },
                ].map((m) => (
                  <div key={m.d} className="flex items-start gap-4">
                    <span className="mt-2 w-3 h-3 rounded-full bg-[#10B981] shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
                    <p className="text-lg md:text-xl text-gray-300 font-light"><strong className="text-white">{m.d}</strong> — {m.t}</p>
                  </div>
                ))}
              </div>
              <p className="text-base md:text-lg text-gray-400 font-light mt-8 max-w-2xl">Objectif : de 1 000 utilisateurs (mi-2026) à 20 000 utilisateurs dans 8 pays OHADA d'ici 2028.</p>
            </section>

            {/* 10. CTA */}
            <section className="h-screen flex flex-col items-center justify-center px-6 pointer-events-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl w-full max-w-xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Testez l'avenir.</h2>
                <p className="text-gray-300 mb-8 font-light text-lg">Le MVP est <strong className="text-[#10B981]">en ligne</strong>. Rejoignez la communauté Richard AI.</p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Nom complet" className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"/>
                  <input type="email" placeholder="Adresse email" required className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"/>
                  <button type="submit" className="w-full mt-2 p-4 bg-[#10B981] hover:bg-[#059669] rounded-xl font-bold text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">Accéder en exclusivité</button>
                </form>
                <a href="https://www.richardlecomptable.com" className="block mt-6 text-sm text-gray-400 hover:text-[#10B981] transition-colors">www.richardlecomptable.com</a>
              </div>
            </section>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
