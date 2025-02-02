"use client";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { CanvasLoader } from "@/components/loader";
import { useMediaQuery } from "@/hooks/use-media-query";


const Computers = ({ isMobile }: { isMobile: boolean }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* 基础环境光 */}
      <ambientLight intensity={0.6} color="#ffffff" />
      
      {/* 半球光 */}
      <hemisphereLight 
        intensity={0.8}
        groundColor="#000000"
        color="#ffffff"
      />

      {/* 主光源 - 显示器聚光 */}
      <spotLight
        position={[-15, 20, -5]}
        angle={0.15}
        penumbra={0.5}
        intensity={5}
        castShadow
        shadow-mapSize={1024}
        color="#ffffff"
      />

      {/* 显示器屏幕发光 */}
      <pointLight 
        position={[0, 2, -8]}
        intensity={3}
        color="#b1e1ff"
        distance={10}
        decay={1.5}
      />

      {/* 显示器屏幕主光源 - 更强烈的蓝白色调 */}
      <spotLight
        position={[0, 5, -5]}
        angle={0.25}
        penumbra={0.4}
        intensity={8}
        color="#e1f5ff"
        distance={15}
        decay={1.5}
        castShadow
      />

      {/* 桌面照明 - 更柔和的填充光 */}
      <spotLight
        position={[0, 8, 2]}
        angle={0.6}
        penumbra={0.5}
        intensity={3}
        color="#ffffff"
        distance={12}
        decay={1.8}
      />

      {/* 桌面中心补光 */}
      <spotLight
        position={[0, 15, 5]}
        angle={0.5}
        penumbra={0.6}
        intensity={2.5}
        color="#ffffff"
        distance={20}
        decay={1.8}
      />

      {/* 前缘阴影增强 */}
      <spotLight
        position={[0, -2, 8]}
        angle={0.4}
        penumbra={0.2}
        intensity={2}
        color="#000000"
        distance={10}
        decay={1.5}
      />

      {/* RGB氛围灯 */}
      <pointLight
        position={[8, 1, 5]}
        intensity={1}
        color="#ff0066"
        distance={8}
        decay={2}
      />
      <pointLight
        position={[-8, 1, 5]}
        intensity={1}
        color="#9d4edd"
        distance={8}
        decay={2}
      />

      {/* 整体边缘阴影 */}
      <spotLight
        position={[0, 3, 2]}
        angle={1.2}
        penumbra={1}
        intensity={0.5}
        color="#000000"
        distance={15}
        decay={1.5}
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

export const ComputersCanvas = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full h-full"
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
};


