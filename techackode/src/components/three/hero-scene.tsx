import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

function DistortedSphere() {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.4}>
      <Sphere args={[1.2, 64, 64]} scale={1.35}>
        <MeshDistortMaterial
          color="#7dd3fc"
          attach="material"
          distort={0.38}
          speed={2}
          roughness={0.25}
          metalness={0.15}
        />
      </Sphere>
    </Float>
  )
}

function SecondaryOrb() {
  return (
    <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <Sphere args={[0.35, 32, 32]} position={[2.2, 1.1, -0.5]}>
        <meshStandardMaterial
          color="#c4b5fd"
          emissive="#a78bfa"
          emissiveIntensity={0.35}
          roughness={0.35}
        />
      </Sphere>
    </Float>
  )
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className ?? 'h-full w-full min-h-[320px]'}>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 42 }} dpr={[1, 1.5]}>
        <color attach="background" args={['#f0f9ff']} />
        <ambientLight intensity={0.85} />
        <directionalLight position={[5, 5, 5]} intensity={0.9} color="#ffffff" />
        <pointLight position={[-3, -2, 2]} intensity={0.5} color="#e9d5ff" />
        <DistortedSphere />
        <SecondaryOrb />
      </Canvas>
    </div>
  )
}
