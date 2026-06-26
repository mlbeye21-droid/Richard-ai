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

        <ScrollControls pages={5} damping={0.3}>
          <Richard3DModel />
          <Scroll html style={{ width: "100%" }}>

            <div className="h-screen flex flex-col items-center justify-center px-6 text-center">
              <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter mb-4 drop-shadow-xl">RICHARD AI</h1>
              <p className="text-xl md:text-3xl text-gray-300 max-w-3xl font-light">L'IA au service des métiers de la gestion.</p>
            </div>

            <div className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full md:w-2/3 pointer-events-none">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Le fardeau de la recherche.</h2>
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-4">En moyenne, <strong className="text-[#10B981]">2,5 heures perdues</strong> chaque jour à fouiller dans les Actes Uniformes.</p>
            </div>

            <div className="h-screen flex flex-col items-end justify-center px-10 md:px-32 text-right w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 1 MVP</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Le Documentaire.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">La vérité brute, instantanément. Une architecture RAG garantissant une fidélité textuelle à 100%.</p>
              </div>
            </div>

            <div className="h-screen flex flex-col items-start justify-center px-10 md:px-32 text-left w-full pointer-events-none">
              <div className="md:w-1/2">
                <span className="text-[#10B981] font-bold tracking-widest uppercase text-sm mb-2 block">Version 3</span>
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">L'Expert Comptable.</h2>
                <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">Richard génère vos écritures comptables, détecte les anomalies et applique les normes SYSCOHADA.</p>
              </div>
            </div>

            <div className="h-screen flex flex-col items-center justify-center px-6 pointer-events-auto">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 md:p-14 rounded-3xl shadow-2xl w-full max-w-xl text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Testez l'avenir.</h2>
                <p className="text-gray-300 mb-8 font-light text-lg">Rejoignez le MVP en <strong className="text-white">Janvier 2026</strong>.</p>
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Nom complet" className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"/>
                  <input type="email" placeholder="Adresse email" required className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#10B981] transition-colors"/>
                  <button type="submit" className="w-full mt-2 p-4 bg-[#10B981] hover:bg-[#059669] rounded-xl font-bold text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]">Accéder en exclusivité</button>
                </form>
              </div>
            </div>

          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
