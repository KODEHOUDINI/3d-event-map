'use client'

import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import EventGizmo from './EventGizmo'
import EventGrid from './EventGrid'
import ModelsHub from './ModelsHub'

export default function Experience() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 12, 12], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <color attach='background' args={['#0a0a6c']} />
      <OrbitControls
        makeDefault
        autoRotate={true}
        autoRotateSpeed={0.01}
        zoomSpeed={0.85}
        minZoom={40}
        maxZoom={140}
        // enablePan={false}
        dampingFactor={0.05}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2.5}
      />
      <ModelsHub />
      <EventGrid />
      <EventGizmo />
      <Environment preset='city' />
    </Canvas>
  )
}
