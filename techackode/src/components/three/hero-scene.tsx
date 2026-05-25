import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere } from '@react-three/drei'

function DistortedSphere() {
  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={1.2}>
      <Sphere args={[1, 64, 64]} scale={1.15}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.35}
          speed={2}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  )
}

export function HeroScene() {
  return (
    <div className="h-56 w-full">
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} />
        <DistortedSphere />
      </Canvas>
    </div>
  )
}
