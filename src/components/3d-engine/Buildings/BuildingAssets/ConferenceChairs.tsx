import { Instance, Instances, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

import { conferenceChairsData } from '@/lib/constants'

export default function ConferenceChairs() {
  const { nodes, materials } = useGLTF('/3d-models/Buildings/EventGrounds.glb')

  return (
    <>
      <Instances
        castShadow
        range={conferenceChairsData.length}
        geometry={(nodes.ConferenceChairs_1 as Mesh).geometry}
        material={materials.black}
      >
        {conferenceChairsData.map((transforms, index) => (
          <Instance
            key={index}
            position={[
              transforms.position[0],
              transforms.position[1],
              transforms.position[2]
            ]}
          />
        ))}
      </Instances>

      <Instances
        castShadow
        range={conferenceChairsData.length}
        geometry={(nodes.ConferenceChairs_2 as Mesh).geometry}
        material={materials['Material.001']}
      >
        {conferenceChairsData.map((transforms, index) => (
          <Instance
            key={index}
            position={[
              transforms.position[0],
              transforms.position[1],
              transforms.position[2]
            ]}
          />
        ))}
      </Instances>

      <Instances
        castShadow
        range={conferenceChairsData.length}
        geometry={(nodes.ConferenceChairs_3 as Mesh).geometry}
        material={materials.metal}
      >
        {conferenceChairsData.map((transforms, index) => (
          <Instance
            key={index}
            position={[
              transforms.position[0],
              transforms.position[1],
              transforms.position[2]
            ]}
          />
        ))}
      </Instances>

      <Instances
        castShadow
        range={conferenceChairsData.length}
        geometry={(nodes.ConferenceChairs_4 as Mesh).geometry}
        material={materials['black.001']}
      >
        {conferenceChairsData.map((transforms, index) => (
          <Instance
            key={index}
            position={[
              transforms.position[0],
              transforms.position[1],
              transforms.position[2]
            ]}
          />
        ))}
      </Instances>
    </>
  )
}
