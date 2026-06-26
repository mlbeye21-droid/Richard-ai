"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export function Richard3DModel() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);
  const scroll = useScroll();

  useFrame((state, delta) => {
    if (!meshRef.current || !materialRef.current) return;
    const offset = scroll.offset;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.rotation.x += delta * 0.1;
    const targetDistort = Math.max(0, 0.8 - offset * 2.5);
    materialRef.current.distort = THREE.MathUtils.lerp(materialRef.current.distort, targetDistort, 0.1);
    const targetX = offset > 0.8 ? 0 : Math.sin(offset * Math.PI) * 1.5;
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
    const colorStart = new THREE.Color("#0a1a14");
    const colorEnd = new THREE.Color("#10B981");
    materialRef.current.color.lerpColors(colorStart, colorEnd, offset);
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 64]} position={[0, 0, 0]}>
      <MeshDistortMaterial ref={materialRef} envMapIntensity={2} clearcoat={1} clearcoatRoughness={0.1} metalness={0.7} roughness={0.2} speed={1.5} />
    </Icosahedron>
  );
}
