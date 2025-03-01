import { useMemo } from 'react'
import * as THREE from 'three'

const LINE_NB_POINTS = 12000

export const MySpline = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(-2, 0, -20),
        new THREE.Vector3(-3, 0, -30),
        new THREE.Vector3(0, 0, -40),
        new THREE.Vector3(5, 0, -50),
        new THREE.Vector3(7, 0, -60),
        new THREE.Vector3(5, 0, -70),
        new THREE.Vector3(0, 0, -80),
        new THREE.Vector3(0, 0, -90),
        new THREE.Vector3(0, 0, -100)
      ],
      false,
      'catmullrom',
      0.5
    )
  }, [])

  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -0.2)
    shape.lineTo(0, 0.2)

    return shape
  }, [curve])

  return (
    <>
      {/* LINE */}
      <group position-y={-2}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: false,
                extrudePath: curve
              }
            ]}
          />
          <meshStandardMaterial color={'white'} opacity={0.7} transparent />
        </mesh>
      </group>
    </>
  )
}
