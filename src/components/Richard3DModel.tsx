"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, useScroll } from "@react-three/drei";
import * as THREE from "three";

/**
 * Logo Richard AI : le PNG (public/Logo_Richard.PNG) est affiché comme une
 * image flottante dans la scène, en rotation lente sur l'axe Y, avec un léger
 * mouvement de flottement et un déplacement subtil piloté par le scroll.
 */
export function Richard3DModel() {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const texture = useTexture("/Logo_Richard.PNG");
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;

  // Conserve le ratio d'aspect réel de l'image.
  const image = texture.image as HTMLImageElement | undefined;
  const aspect = image && image.height ? image.width / image.height : 1;
  const planeHeight = 3.2;
  const planeWidth = planeHeight * aspect;

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const offset = scroll.offset;

    // Rotation lente continue sur l'axe Y — le logo "flotte" et tourne.
    groupRef.current.rotation.y += delta * 0.4;

    // Léger flottement vertical.
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.18;

    // Déplacement horizontal subtil au fil du scroll (recentré à la fin).
    const targetX = offset > 0.85 ? 0 : Math.sin(offset * Math.PI) * 1.2;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, targetX, 0.1);
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <planeGeometry args={[planeWidth, planeHeight]} />
        <meshBasicMaterial
          map={texture}
          transparent
          alphaTest={0.05}
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}
