import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Instance, Instances, useGLTF, useTexture } from '@react-three/drei'
import { gsap } from 'gsap'
import { Mesh, MeshStandardMaterial } from 'three'

type bdataType = {
  position: number[]
  rotation: number[]
}

export default function Building({
  buildingLabel,
  bData
}: {
  buildingLabel: string
  bData: bdataType[]
}) {
  const { nodes, materials } = useGLTF(
    `/3d-models/Buildings/${buildingLabel}.glb`
  )
  const buildingColor = useTexture('/3d-models/BuildingColor.png')
  buildingColor.flipY = false
  ;(materials.Texture as MeshStandardMaterial).map = buildingColor

  const buildingRef = useRef<Mesh>(null)
  const buildingTl = gsap.timeline()

  useGSAP(() => {
    // The new hook will take care of context and life cicle.
    if (buildingRef.current) {
      buildingTl.fromTo(
        // Creates the animation
        buildingRef.current.scale,
        { x: 0, y: 0, z: 0 }, // Initial position
        {
          x: 1,
          y: 1,
          z: 1, // Final position
          ease: 'power2.out', // Easing function
          duration: 3 // Duration
        }
      )
    }
  }, {}) //Dependencies, if you have

  return (
    <group dispose={null} ref={buildingRef}>
      <Instances
        castShadow
        receiveShadow
        range={bData.length}
        geometry={(nodes[`${buildingLabel}`] as Mesh).geometry}
        frustumCulled={false}
      >
        <meshStandardMaterial map={buildingColor} />
        {bData.map((transforms, index) => (
          <Instance
            key={index}
            // onClick={() => {
            //   console.log(
            //     `${buildingLabel} with position: ${transforms.position} clicked`
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
