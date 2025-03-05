import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Instance, Instances, useGLTF, useTexture } from '@react-three/drei'
// import { useThree } from '@react-three/fiber'
import { gsap } from 'gsap'
import { Mesh, MeshStandardMaterial } from 'three'

type bdataType = {
  position: number[]
  rotation: number[]
}

export default function Building({
  buildingLabel,
  bData,
  buildingTexture
}: {
  buildingLabel: string
  bData: bdataType[]
  buildingTexture: string
}) {
  const { nodes, materials } = useGLTF(
    `/3d-models/Buildings/${buildingLabel}.glb`
  )

  // const { scene } = useThree()
  // scene.traverse(children => {
  //   if (
  //     children instanceof Mesh &&
  //     children.material instanceof MeshStandardMaterial
  //   ) {
  //     children.material.envMapIntensity = 8.5
  //     console.log('my Envmap', children.material.colo)
  //   }
  // })

  const buildingColor = useTexture(`/3d-models/${buildingTexture}.png`)
  buildingColor.flipY = false
  // console.log('buildingColor', buildingColor)
  ;(materials.Texture as MeshStandardMaterial).map = buildingColor

  const buildingRef = useRef<Mesh>(null)
  const buildingTl = gsap.timeline()

  useGSAP(() => {
    if (buildingRef.current) {
      buildingTl.fromTo(
        buildingRef.current.scale,
        { x: 0, y: 0, z: 0 },
        {
          x: 1,
          y: 1,
          z: 1,
          ease: 'power2.out',
          duration: 5
        }
      )
    }
  }, [])

  return (
    <group dispose={null} ref={buildingRef}>
      <Instances
        castShadow
        range={bData.length}
        geometry={(nodes[`${buildingLabel}`] as Mesh).geometry}
        frustumCulled={false}
      >
        <meshStandardMaterial map={buildingColor} />
        {bData.map((transforms, index) => (
          <Instance
            castShadow
            key={index}
            // onClick={() => {
            //   console.log(
            //     // `${buildingLabel} with position: ${transforms.position} clicked`
            //     `${buildingTexture}`
            //   )
            // }}
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
          />
        ))}
      </Instances>
    </group>
  )
}
