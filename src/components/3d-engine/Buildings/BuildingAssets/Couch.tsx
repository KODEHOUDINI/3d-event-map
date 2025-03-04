import { Instance, Instances, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

import { couchData } from '@/lib/constants'

export default function Couch() {
  const { nodes, materials } = useGLTF('/3d-models/Buildings/EventGrounds.glb')

  return (
    <>
      <Instances
        castShadow
        range={couchData.length}
        geometry={(nodes.Couch as Mesh).geometry}
        material={materials['deep wine']}
      >
        {couchData.map((transforms, index) => (
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
