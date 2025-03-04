import { useMemo } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface Curve3Data {
  position: number[] // Position as an array of numbers (x, y, z)
  points: THREE.Vector3[] // Array of Vector3 instances for points
}

const LINE_NB_POINTS = 10000
const SPHERE_INTERVAL = 650

export const MySpline = ({ position, points }: Curve3Data) => {
  const { nodes } = useGLTF('/3d-models/Buildings/LocationPinAssets.glb')
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([...points], false, 'catmullrom', 0.5)
  }, [nodes.Destination, nodes.Start_Point])

  const shape = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(0, -0.3)
    shape.lineTo(0, 0.3)

    return shape
  }, [curve])

  const pathGuides = useMemo(() => {
    const points = []

    // Add the starting cube (at t = 0)
    const startPoint = curve.getPointAt(0)
    points.push(
      <mesh
        key='start'
        geometry={(nodes.Start_Point as THREE.Mesh).geometry}
        position={startPoint}
      >
        <meshStandardMaterial color='green' />
      </mesh>
    )

    // Add spheres every 50 points
    for (let i = 0; i < LINE_NB_POINTS; i++) {
      if (i % SPHERE_INTERVAL === 0 && i !== 0 && i !== LINE_NB_POINTS - 1) {
        // Place a sphere every 50th point except start and end
        const point = curve.getPointAt(i / (LINE_NB_POINTS - 1))
        points.push(
          <Float
            key={i}
            speed={3}
            rotationIntensity={0.06}
            floatIntensity={0.01}
            floatingRange={[1.9, 3]}
          >
            <mesh position={point}>
              <sphereGeometry args={[0.1, 32, 32]} />
              <meshStandardMaterial color='orange' />
            </mesh>
          </Float>
        )
      }
    }

    // Add the ending cube (at t = 1)
    const endPoint = curve.getPointAt(1)
    points.push(
      <Float
        key='end'
        speed={3}
        rotationIntensity={0.06}
        floatIntensity={0.01}
        floatingRange={[1.9, 3]}
      >
        <mesh
          geometry={(nodes.Destination as THREE.Mesh).geometry}
          position={endPoint}
        >
          <meshStandardMaterial color='green' />
        </mesh>
      </Float>
    )

    return points
  }, [curve])

  return (
    <>
      {/* LINE */}
      <group position={new THREE.Vector3(...position)}>
        <mesh>
          <extrudeGeometry
            args={[
              shape,
              {
                steps: LINE_NB_POINTS,
                bevelEnabled: true,
                extrudePath: curve
              }
            ]}
          />
          <meshStandardMaterial color={'white'} opacity={0.7} transparent />
        </mesh>
        {/* Spheres */}

        {pathGuides}
      </group>
    </>
  )
}
