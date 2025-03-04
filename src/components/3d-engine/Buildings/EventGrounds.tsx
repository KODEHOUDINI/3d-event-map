import { useGLTF } from '@react-three/drei'
import { useControls } from 'leva'
import { Mesh } from 'three'

import BarStools from './BuildingAssets/BarStools'
import ConferenceChairs from './BuildingAssets/ConferenceChairs'
import Couch from './BuildingAssets/Couch'
import VisitorEntranceChair from './BuildingAssets/VisitorEntranceChair'

export default function EventGrounds() {
  const { nodes, materials } = useGLTF('/3d-models/Buildings/EventGrounds.glb')
  const { posX, posY, posZ, scale, rotY } = useControls({
    posX: { value: 37.7, min: -10, max: 50, step: 0.0001 },
    posY: { value: 0, min: -20, max: 20, step: 0.0001 },
    posZ: { value: -4.3, min: -20, max: 20, step: 0.0001 },
    scale: { value: 0.17, min: 0.1, max: 1, step: 0.0001 },
    rotY: {
      value: Math.PI / 2,
      min: -Math.PI * 2,
      max: Math.PI * 2,
      step: 0.0001
    }
  })

  return (
    <group
      dispose={null}
      position={[posX, posY, posZ]}
      scale={scale}
      rotation-y={rotY}
    >
      <ConferenceChairs />
      <VisitorEntranceChair />
      <BarStools />
      <Couch />
      <group position={[3.443, 0, -7.346]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_1 as Mesh).geometry}
          material={materials['wall white']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_2 as Mesh).geometry}
          material={materials['deep blue']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_3 as Mesh).geometry}
          material={materials['floor inside']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_4 as Mesh).geometry}
          material={materials['less yellowy floor']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_5 as Mesh).geometry}
          material={materials.water}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_6 as Mesh).geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_7 as Mesh).geometry}
          material={materials.gray}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_8 as Mesh).geometry}
          material={materials['white ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_9 as Mesh).geometry}
          material={materials.brown}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_10 as Mesh).geometry}
          material={materials['shiny black']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_11 as Mesh).geometry}
          material={materials['door frames']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_12 as Mesh).geometry}
          material={materials.glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.EventCenter_13 as Mesh).geometry}
          material={materials['Material.006']}
        />
      </group>
    </group>
  )
}
