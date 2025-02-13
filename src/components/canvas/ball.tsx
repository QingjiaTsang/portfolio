"use client";

import type { StaticImageData } from "next/image";

import {
  Decal,
  Environment,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CanvasLoader } from "@/components/canvas";

type BallProps = {
  icon: StaticImageData;
};
function Ball({ icon }: BallProps) {
  const [decal] = useTexture([icon.src]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>

      <Environment preset="dawn" />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />

        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
}

export function BallCanvas({ icon }: BallProps) {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}

    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Ball icon={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

