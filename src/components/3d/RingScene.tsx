'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

const seededRandom = (seed: number) => {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
};

function Ring({ radius, tube, rotation, speed, color }: { 
  radius: number; 
  tube: number; 
  rotation: [number, number, number];
  speed: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += speed * 0.002;
      ref.current.rotation.y += speed * 0.001;
    }
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={[radius, tube, 32, 96]} />
      <meshStandardMaterial 
        color={color}
        wireframe
        transparent
        opacity={0.4}
      />
    </mesh>
  );
}

function Particles({ count = 200 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3 + seededRandom(i * 3 + 1) * 4;
      const theta = seededRandom(i * 3 + 2) * Math.PI * 2;
      const phi = Math.acos(2 * seededRandom(i * 3 + 3) - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0005;
      ref.current.rotation.x += 0.0002;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        color="#d4a574" 
        transparent 
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingSphere() {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref} scale={0.8}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
          color="#d4a574"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4a574" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
      
      {/* Multiple Rings */}
      <Ring radius={2.5} tube={0.02} rotation={[0, 0, 0]} speed={1} color="#d4a574" />
      <Ring radius={3} tube={0.015} rotation={[Math.PI / 4, 0, 0]} speed={0.8} color="#ffffff" />
      <Ring radius={3.5} tube={0.01} rotation={[0, Math.PI / 3, Math.PI / 6]} speed={0.6} color="#d4a574" />
      <Ring radius={4} tube={0.008} rotation={[Math.PI / 2, Math.PI / 4, 0]} speed={0.4} color="#888888" />
      
      {/* Center Sphere */}
      <FloatingSphere />
      
      {/* Particles */}
      <Particles count={100} />
    </>
  );
}

export function RingScene({ staticScene = false }: { staticScene?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-45">
      <Canvas
        frameloop={staticScene || reduceMotion ? 'demand' : 'always'}
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.25]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
