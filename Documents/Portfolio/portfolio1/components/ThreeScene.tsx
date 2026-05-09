"use client"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, RoundedBox } from '@react-three/drei'

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <Float floatIntensity={1} rotationIntensity={1}>
        <RoundedBox args={[3.2, 2, 0.4]} radius={0.12} smoothness={4}>
          <meshStandardMaterial color="#0ea5e9" metalness={0.6} roughness={0.2} />
        </RoundedBox>
      </Float>
      <OrbitControls enableZoom={true} autoRotate={false} />
    </Canvas>
  )
}
