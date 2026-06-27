import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Désactivé : le double-montage du StrictMode (dev) est incompatible avec le
  // portail HTML de <Scroll html> de @react-three/drei (createRoot appelé 2x).
  reactStrictMode: false,

  // URL propre pour la carte de visite, servie indépendamment de la landing.
  // /carte  -> /carte/index.html (la landing reste sur "/").
  async rewrites() {
    return [{ source: "/carte", destination: "/carte/index.html" }];
  },
};

export default nextConfig;
