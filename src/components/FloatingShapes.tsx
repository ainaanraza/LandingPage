import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// A dynamic abstract shapes scene replacing generic boxes
export function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
            groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
        }
    });

    return (
        <group ref={groupRef}>

            {/* Central Hero Shape */}
            <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                <mesh position={[-8, -2, -5]}>
                    <torusKnotGeometry args={[8, 2, 128, 32]} />
                    <MeshDistortMaterial
                        color="#D91278" // Pink from logo
                        emissive="#D91278"
                        emissiveIntensity={0.8}
                        roughness={0.2}
                        metalness={0.8}
                        distort={0.4}
                        speed={2}
                    />
                </mesh>
            </Float>

            {/* Secondary Shapes */}
            <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
                <RoundedBox args={[8, 8, 8]} radius={1} position={[-15, 10, -10]}>
                    <meshStandardMaterial
                        color="#F6B221" // Yellow from logo
                        roughness={0.2}
                        metalness={0.5}
                        emissive="#F6B221"
                        emissiveIntensity={0.4}
                    />
                </RoundedBox>
            </Float>

            <Float speed={2.5} rotationIntensity={2} floatIntensity={2}>
                <mesh position={[18, -12, -8]}>
                    <octahedronGeometry args={[6]} />
                    <meshStandardMaterial
                        color="#155196" // Blue from logo
                        roughness={0.1}
                        metalness={0.8}
                        emissive="#155196"
                        emissiveIntensity={0.6}
                        wireframe
                    />
                </mesh>
            </Float>

            {/* Floating particles */}
            {Array.from({ length: 40 }).map((_, i) => (
                <Particle key={i} />
            ))}
        </group>
    );
}

function Particle() {
    const mesh = useRef<THREE.Mesh>(null);

    // Random start values
    const position = useMemo(() => {
        return new THREE.Vector3(
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 60,
            (Math.random() - 0.5) * 40 - 10
        );
    }, []);

    const speed = useMemo(() => Math.random() * 0.2 + 0.1, []);

    // Colors from brand
    const colors = ['#D91278', '#F6B221', '#155196', '#ffffff'];
    const color = useMemo(() => colors[Math.floor(Math.random() * colors.length)], []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.05;
            mesh.current.rotation.x += speed * 0.05;
            mesh.current.rotation.y += speed * 0.05;
        }
    });

    return (
        <mesh ref={mesh} position={position}>
            <icosahedronGeometry args={[0.5]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
        </mesh>
    );
}
