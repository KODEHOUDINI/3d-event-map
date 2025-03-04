import { Instance, Instances, useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

import { barStoolsData } from '@/lib/constants'

export default function BarStools() {
  const { nodes, materials } = useGLTF('/3d-models/Buildings/EventGrounds.glb')

  return (
    <>
      <Instances
        castShadow
        range={barStoolsData.length}
        geometry={(nodes.BarStools_1 as Mesh).geometry}
        material={materials['dark metal']}
      >
        {barStoolsData.map((transforms, index) => (
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
        range={barStoolsData.length}
        geometry={(nodes.BarStools_2 as Mesh).geometry}
        material={materials['Material.002']}
      >
        {barStoolsData.map((transforms, index) => (
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
