'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!sphereRef.current) return;
        const elapsed = clock.getElapsedTime();
        sphereRef.current.rotation.y = elapsed * 0.08;
        sphereRef.current.rotation.x = Math.sin(elapsed * 0.3) * 0.1;
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1, 100, 200]} scale={2.2}>
                <MeshDistortMaterial
                    color="#4F46E5"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

export const FluidBackground = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-screen">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#db2777" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#4f46e5" />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};
