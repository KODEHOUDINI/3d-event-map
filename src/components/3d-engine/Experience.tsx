'use client'

import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  B1Data,
  B2Data,
  B3Data,
  B4Data,
  B5Data,
  B6Data,
  B7Data,
  B8Data
} from '@/lib/constants'

import Building from './Buildings/Building'
import EventGizmo from './EventGizmo'
import EventGrid from './EventGrid'
import ModelsHub from './ModelsHub'

export default function Experience() {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 12, 12], fov: 50, near: 0.1, far: 3000 }}
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
        maxPolarAngle={Math.PI / 2.2}
      />
      <ModelsHub />
      {/* <MySpline /> */}
      {/* <ClickableCurve /> */}
      <Building buildingLabel='B1' bData={B1Data} />
      <Building buildingLabel='B2' bData={B2Data} />
      <Building buildingLabel='B3' bData={B3Data} />
      <Building buildingLabel='B4' bData={B4Data} />
      <Building buildingLabel='B5' bData={B5Data} />
      <Building buildingLabel='B6' bData={B6Data} />
      <Building buildingLabel='B7' bData={B7Data} />
      <Building buildingLabel='B7' bData={B8Data} />

      <EventGrid />
      <EventGizmo />
      <Environment preset='city' />
    </Canvas>
  )
}

const modelLabels = ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8']

modelLabels.forEach(label =>
  useGLTF.preload(`/3d-models/Buildings/${label}.glb`)
)
