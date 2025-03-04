import { Instance, Instances, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

import { visitorChairsData } from '@/lib/constants'

export default function VisitorEntranceChair() {
  const { nodes, materials } = useGLTF('/3d-models/Buildings/EventGrounds.glb')

  return (
    <>
      <Instances
        castShadow
        range={visitorChairsData.length}
        geometry={(nodes.VisitorEntranceChair_1 as Mesh).geometry}
        material={materials['ashy metal']}
      >
        {visitorChairsData.map((transforms, index) => (
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
        range={visitorChairsData.length}
        geometry={(nodes.VisitorEntranceChair_2 as Mesh).geometry}
        material={materials['red sofa']}
      >
        {visitorChairsData.map((transforms, index) => (
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
