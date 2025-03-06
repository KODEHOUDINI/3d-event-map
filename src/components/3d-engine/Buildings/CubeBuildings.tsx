import { useRef } from 'react'
import { state } from '@/vStore/store'
import { Instance, Instances, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'

type cubeBdataType = {
  position: number[]
  rotation: number[]
}

export default function CubeBuildings({ bData }: { bData: cubeBdataType[] }) {
  const { nodes } = useGLTF('/3d-models/Floor.glb')

  const cubeBuildingRef = useRef<Mesh>(null)
  const snap = useSnapshot(state)

  return (
    <group dispose={null} visible={!snap.showRoom} ref={cubeBuildingRef}>
      <Instances
        castShadow
        range={bData.length}
        geometry={(nodes.Floor as Mesh).geometry}
        frustumCulled={false}
      >
        <meshStandardMaterial color={'#ffffff'} />
        {bData.map((transforms, index) => {
          // Generate random scale factors between 0.8 and 1.2 for each instance
          const randomScale = [
            Math.random() * (3.2 - 0.8) + 2.8,
            Math.random() * (3.2 - 0.8) + 1.7,
            Math.random() * (2.2 - 0.8) + 2.8
          ]

          return (
            <Instance
              castShadow
              onClick={() => {
                console.log(`position: ${transforms.position} clicked`)
              }}
              key={index}
              position={[
                transforms.position[0],
                transforms.position[1],
                transforms.position[2]
              ]}
              rotation={[
                transforms.rotation[0],
                transforms.rotation[1],
                transforms.rotation[2]
              ]}
              scale={[randomScale[0], randomScale[1], randomScale[2]]} // Applying random scale here
            />
          )
        })}
      </Instances>
    </group>
  )
}
