import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

// Нормализирана позиция на мишката (за parallax), споделена в модула.
const mouse = { x: 0, y: 0 }
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1
  })
}

// --- Плаващи листа (тетраедри) ---
function FloatingLeaves({ count = 14 }) {
  const items = useMemo(() => {
    const arr = []
    for (let i = 0; i < count; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 5, (Math.random() - 0.5) * 4 - 1],
        scale: 0.12 + Math.random() * 0.22,
        rot: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        color: ['#cda35a', '#5f9a82', '#bd6a42', '#8fbca8'][i % 4],
        speed: 1 + Math.random() * 2,
      })
    }
    return arr
  }, [count])

  return items.map((it, i) => (
    <Float key={i} speed={it.speed} rotationIntensity={1.6} floatIntensity={1.4}>
      <mesh position={it.pos} rotation={it.rot} scale={it.scale}>
        <tetrahedronGeometry args={[1, 0]} />
        <meshStandardMaterial color={it.color} flatShading roughness={0.6} />
      </mesh>
    </Float>
  ))
}

// --- Въртяща се група с parallax спрямо мишката ---
function SceneContent() {
  const group = useRef(null)
  useFrame((state, delta) => {
    if (!group.current) return
    group.current.rotation.y += delta * 0.12
    // лек наклон към мишката
    group.current.rotation.x += (mouse.y * 0.18 - group.current.rotation.x) * 0.05
    group.current.position.x += (mouse.x * 0.4 - group.current.position.x) * 0.05
  })

  return (
    <group ref={group}>
      <FloatingLeaves count={12} />
      <Sparkles count={60} scale={[10, 6, 5]} size={3.2} speed={0.4} color="#e9d6a6" opacity={0.8} />
    </group>
  )
}

export default function GardenScene() {
  return (
    <Canvas
      className="garden-canvas"
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.4, 6], fov: 42 }}
      onCreated={({ scene }) => {
        scene.fog = new THREE.Fog('#1c3225', 7, 13)
      }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.4} color="#f6e6c4" />
      <pointLight position={[-4, -2, 2]} intensity={0.6} color="#bd6a42" />
      <SceneContent />
    </Canvas>
  )
}
