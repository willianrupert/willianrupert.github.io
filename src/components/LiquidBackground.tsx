'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshTransmissionMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function LiquidSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const { clock, pointer } = state
    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, pointer.x * 2, 0.1)
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, pointer.y * 2, 0.1)
    meshRef.current.rotation.x = clock.getElapsedTime() * 0.2
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.3
  })

  return (
    <mesh ref={meshRef} scale={2.8}>
      <icosahedronGeometry args={[1, 15]} /> 
      <MeshTransmissionMaterial
        backside
        samples={16}
        thickness={2}
        roughness={0}
        transmission={1}
        ior={1.4}
        chromaticAberration={0.1}
        anisotropy={0.3}
        distortion={0.8}
        distortionScale={0.5}
        temporalDistortion={0.2}
        color="#c0ebff"
        bg="#000000"
      />
    </mesh>
  )
}

export function LiquidBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-black">
      {/* Gradientes de fundo para dar cor à refração */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-900 rounded-full mix-blend-screen filter blur-[100px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900 rounded-full mix-blend-screen filter blur-[120px] opacity-30 animate-pulse delay-1000" />
      
      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: false }}>
        <Environment preset="studio" />
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
           <LiquidSphere />
        </Float>
      </Canvas>
    </div>
  )
}