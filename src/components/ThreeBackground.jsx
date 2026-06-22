import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function RotatingIcosahedron() {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.0025;
      meshRef.current.rotation.y += 0.0035;
    }
  });
  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[3, 1]} />
      <meshBasicMaterial color="#915EFF" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function StarField({ count = 400 }) {
  const pointsRef = useRef();
  const positions = React.useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) arr[i] = (Math.random() - 0.5) * 40;
    return arr;
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) pointsRef.current.rotation.y += 0.0006;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#00F0FF" size={0.05} />
    </points>
  );
}

/**
 * Lightweight Three.js background — low-poly wireframe + particle field.
 * Kept geometry-only (no heavy GLTF assets) for performance on low-end devices.
 */
export default function ThreeBackground({ density = 1, className = "" }) {
  return (
    <div className={`absolute inset-0 -z-0 ${className}`}>
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }} dpr={[1, 2]}>
        <RotatingIcosahedron />
        <StarField count={Math.floor(400 * density)} />
      </Canvas>
    </div>
  );
}
