'use client'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

// import EventGizmo from './EventGizmo'
import EventGrid from './EventGrid'

export default function Experience() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 12, 12], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach='background' args={['#0a0a6c']} />
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={-0.1}
        zoomSpeed={0.25}
        minZoom={40}
        maxZoom={140}
        enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 3}
      />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <EventGrid />
      {/* <EventGizmo /> */}
    </Canvas>
  )
}
