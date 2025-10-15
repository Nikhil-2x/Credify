import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  PresentationControls,
  Float,
  Html,
  useGLTF,
} from "@react-three/drei";

// Simple placeholder badge if no GLTF is provided
function Badge() {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3;
    }
  });
  return (
    <group>
      <mesh ref={meshRef} castShadow>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          metalness={0.9}
          roughness={0.2}
          color={"#6ee7ff"}
        />
      </mesh>
      <mesh
        position={[0, -1.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        receiveShadow
      >
        <circleGeometry args={[4, 64]} />
        <meshStandardMaterial color={"#0b1220"} />
      </mesh>
    </group>
  );
}

function ModelWithGLTF({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function HeroScene({ modelUrl }) {
  return (
    <div className="hero-canvas">
      <Canvas shadows camera={{ position: [0, 1.2, 6], fov: 45 }}>
        <color attach="background" args={["#050816"]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          castShadow
          position={[5, 8, 5]}
          intensity={1.2}
          shadow-mapSize={1024}
        />
        <Suspense
          fallback={
            <Html center className="loader">
              Loading 3D…
            </Html>
          }
        >
          <PresentationControls
            global
            rotation={[0, 0, 0]}
            polar={[0, Math.PI / 6]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
            config={{ mass: 1, tension: 150 }}
            snap={{ mass: 2, tension: 300 }}
          >
            <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
              <group position={[0, 0, 0]}>
                {modelUrl ? <ModelWithGLTF url={modelUrl} /> : <Badge />}
              </group>
            </Float>
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  );
}
