"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import * as THREE from "three";

/**
 * Courbe paramétrique en forme de "boucle infinie" (lemniscate de Bernoulli)
 * avec une légère torsion sur l'axe Z pour donner le relief 3D du logo Richard AI.
 */
class InfinityCurve extends THREE.Curve<THREE.Vector3> {
  scale: number;
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }
  getPoint(t: number, target = new THREE.Vector3()) {
    const u = t * Math.PI * 2;
    const denom = 1 + Math.sin(u) * Math.sin(u);
    const x = Math.cos(u) / denom;
    const y = (Math.cos(u) * Math.sin(u)) / denom;
    const z = 0.28 * Math.sin(u * 2); // torsion hors-plan -> effet ruban 3D
    return target.set(x, y, z).multiplyScalar(this.scale);
  }
}

export function Richard3DModel() {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null);
  const scroll = useScroll();

  // Géométrie générée une seule fois (tube fermé suivant la lemniscate).
  const geometry = useMemo(() => {
    const curve = new InfinityCurve(2.1);
    return new THREE.TubeGeometry(curve, 400, 0.32, 48, true);
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !materialRef.current) return;
    const offset = scroll.offset;

    // Rotation continue + inclinaison pilotée par le scroll.
    groupRef.current.rotation.y += delta * 0.25;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      0.15 + offset * 0.5,
      0.08
    );

    // Déplacement latéral subtil au fil du scroll (recentré à la fin).
    const targetX = offset > 0.85 ? 0 : Math.sin(offset * Math.PI) * 1.2;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.1
    );

    // Léger zoom à mesure que l'on descend.
    const targetScale = 1 + offset * 0.15;
    groupRef.current.scale.setScalar(
      THREE.MathUtils.lerp(groupRef.current.scale.x, targetScale, 0.1)
    );

    // Dégradé de couleur : vert profond -> vert de marque (#10B981).
    const colorStart = new THREE.Color("#0a1a14");
    const colorEnd = new THREE.Color("#10B981");
    materialRef.current.color.lerpColors(colorStart, colorEnd, Math.min(1, 0.25 + offset));
    materialRef.current.emissive.lerpColors(
      new THREE.Color("#04140d"),
      new THREE.Color("#059669"),
      offset
    );
  });

  return (
    <group ref={groupRef} rotation={[0.15, 0, 0]}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          ref={materialRef}
          color="#10B981"
          emissive="#04140d"
          emissiveIntensity={0.6}
          metalness={0.6}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          envMapIntensity={2}
        />
      </mesh>
    </group>
  );
}
