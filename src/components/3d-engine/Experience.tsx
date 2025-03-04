'use client'

import { Environment, Stats, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import {
  buildingData,
  curve1Data,
  curve2Data,
  curve3Data
} from '@/lib/constants'

import Building from './Buildings/Building'
import EventGrounds from './Buildings/EventGrounds'
import CameraRig from './CameraRig'
import EventGizmo from './EventGizmo'
import EventGrid from './EventGrid'
import { MySpline } from './MySpline'

export default function Experience() {
  return (
    <Canvas
      shadows={true}
      camera={{ position: [10, 12, 12], fov: 40, near: 0.1, far: 3000 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Stats showPanel={10} />
      <color attach='background' args={['#089cff']} />
      <CameraRig />

      {/* Mainly Using */}
      <EventGrounds />
      <MySpline position={curve1Data.position} points={curve1Data.points} />
      <MySpline position={curve2Data.position} points={curve2Data.points} />
      <MySpline position={curve3Data.position} points={curve3Data.points} />
      {buildingData.map((building, index) => (
        <Building
          key={index}
          buildingLabel={building.label}
          bData={building.data}
        />
      ))}

      <EventGrid />
      <EventGizmo />
      <Environment preset='city' />
    </Canvas>
  )
}

const assetsLabels = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B8',
  'EventGrounds',
  'LocationPinAssets'
]

assetsLabels.forEach(label =>
  useGLTF.preload(`/3d-models/Buildings/${label}.glb`)
)
