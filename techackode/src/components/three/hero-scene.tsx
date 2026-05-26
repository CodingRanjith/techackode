import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

function DistortedSphere() {
  return (
    <Float speed={1.6} rotationIntensity={0.45} floatIntensity={1.2}>
      <Sphere args={[1.15, 64, 64]} scale={1.3}>
        <MeshDistortMaterial
          color="#295270"
          attach="material"
          distort={0.32}
          speed={1.8}
          roughness={0.35}
          metalness={0.2}
        />
      </Sphere>
    </Float>
  )
}

function SecondaryOrb() {
  return (
    <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.7}>
      <Sphere args={[0.32, 32, 32]} position={[1.9, 0.9, -0.4]}>
        <meshStandardMaterial
          color="#524175"
          emissive="#524175"
          emissiveIntensity={0.2}
          roughness={0.4}
        />
      </Sphere>
    </Float>
  )
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className ?? 'h-full w-full min-h-[280px]'}>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={0.85} color="#ffffff" />
        <pointLight position={[-3, -1, 2]} intensity={0.45} color="#295270" />
        <DistortedSphere />
        <SecondaryOrb />
      </Canvas>
    </div>
  )
}
