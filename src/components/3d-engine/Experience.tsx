'use client'

import { Environment, Stats, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'

import { buildingData } from '@/lib/constants'

import Floor from '../3d-models/Floor'
import CubeBuildings from './Buildings/CubeBuildings'
import EventGrounds from './Buildings/EventGrounds'
import CameraRig from './CameraRig'
import MapIcons from './MapIcons'

export default function Experience() {
  // const myColors = [
  //   'BuildingColor1',
  //   'BuildingColor2',
  //   'BuildingColor3',
  //   'BuildingColor4',
  //   'BuildingColor5',
  //   'BuildingColor6',
  //   'BuildingColor7',
  //   'BuildingColor8'
  // ]
  // const snap = useSnapshot(state)

  return (
    <>
      <Canvas
        shadows
        // dpr={[1, 2]}
        camera={{ position: [10, 12, 12], fov: 40, near: 0.1, far: 30000 }}
        // gl={{ preserveDrawingBuffer: true }}
      >
        <Stats showPanel={10} />
        <color attach='background' args={['#089cff']} />
        <CameraRig />

        {/* Mainly Using */}
        <EventGrounds />
        {/* <MySpline position={curve1Data.position} points={curve1Data.points} />
        <MySpline position={curve2Data.position} points={curve2Data.points} />
        <MySpline position={curve3Data.position} points={curve3Data.points} /> */}
        {/* {buildingData.map((building, index) => (
          <Building
            key={index}
            buildingLabel={building.label}
            bData={building.data}
            buildingTexture={myColors[index]}
          />
        ))} */}

        {buildingData.map((building, index) => (
          <CubeBuildings key={index} bData={building.data} />
        ))}
        <Floor />
        <MapIcons />
        <Environment files={'/event_map_1k.hdr'} environmentIntensity={2} />
      </Canvas>
      <Leva hidden />
    </>
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
