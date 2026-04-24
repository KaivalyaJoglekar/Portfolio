'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

const seededRandom = (seed: number) => {
    const value = Math.sin(seed * 12.9898) * 43758.5453;
    return value - Math.floor(value);
};

const GeometricShape = () => {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} scale={1.8}>
                <torusKnotGeometry args={[1, 0.3, 128, 16]} />
                <meshStandardMaterial 
                    color="#222" 
                    roughness={0.1} 
                    metalness={0.9} 
                    emissive="#06b6d4"
                    emissiveIntensity={0.5}
                    wireframe
                />
            </mesh>
        </Float>
    );
};

const Particles = () => {
    const count = 200;
    const mesh = useRef<THREE.InstancedMesh>(null);
    const dummy = useMemo(() => new THREE.Object3D(), []);
    const particles = useMemo(() => {
        const generated: { position: THREE.Vector3; speed: number; size: number }[] = [];
        for (let i = 0; i < count; i++) {
            const position = new THREE.Vector3(
                (seededRandom(i * 4 + 1) - 0.5) * 20,
                (seededRandom(i * 4 + 2) - 0.5) * 20,
                (seededRandom(i * 4 + 3) - 0.5) * 10
            );
            generated.push({
                position,
                speed: seededRandom(i * 4 + 4) * 0.02 + 0.005,
                size: i % 2 === 0 ? 0.05 : 0.1,
            });
        }
        return generated;
    }, [count]);

    useFrame(() => {
        if (!mesh.current) return;
        particles.forEach((particle, i) => {
            particle.position.y += particle.speed;
            if (particle.position.y > 10) particle.position.y = -10;
            
            dummy.position.copy(particle.position);
            dummy.scale.setScalar(particle.size);
            dummy.updateMatrix();
            mesh.current!.setMatrixAt(i, dummy.matrix);
        });
        mesh.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
            <boxGeometry />
            <meshBasicMaterial color="#e879f9" />
        </instancedMesh>
    );
};

export const NeonScene = () => {
    return (
        <div className="absolute inset-0 z-0 h-screen w-full">
            <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#06b6d4" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#e879f9" />
                
                <GeometricShape />
                <Particles />
                
                <Environment preset="city" />
            </Canvas>
            
            {/* Gradient Overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black pointer-events-none" />
        </div>
    );
};
