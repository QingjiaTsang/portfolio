"use client";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CanvasLoader } from "@/components/canvas/loader";
import { useMediaQuery } from "@/hooks/use-media-query";

// 在组件渲染之前就预加载3D模型进来，并启用 draco 进行压缩
useGLTF.preload("./desktop_pc/scene.gltf", true);

function Computers({ isMobile }: { isMobile: boolean }) {
  // 启用 draco 进行压缩
  const computer = useGLTF("./desktop_pc/scene.gltf", true);

  return (
    <mesh>
      {/* 基础环境光 */}
      <ambientLight
        intensity={0.5}
        color="#ffffff"
      />
      {/* 屏幕顶部微小的点光源 */}
      <pointLight
        intensity={0.3}
        position={[0.8, 1.2, -0.8]}
        decay={-1.5}
      />
      {/* 利用点光源增加桌面前的亮度 */}
      <pointLight
        intensity={0.05}
        position={[0.8, 1.2, -0.8]}
        decay={-1.5}
      />

      <primitive
        object={computer.scene}
        // for desktop_pc
        scale={isMobile ? 0.7 : 0.8}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.005, -0.2, -0.1]}

        // for sci-fi_computer
        // scale={isMobile ? 1.4 : 1.5}
        // position={isMobile ? [-10, -3, -2] : [0.1, -3.25, 1.1]}
        // rotation={[-0.008, Math.PI / 2.4, 0.01]}
      />
    </mesh>
  );
}

export function ComputersCanvas() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="size-full"
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
