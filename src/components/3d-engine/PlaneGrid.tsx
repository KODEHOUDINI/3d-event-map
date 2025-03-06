import React, { useEffect, useRef, useState } from 'react'
import { DoubleSide, Mesh, PlaneGeometry } from 'three'

export default function PlaneGrid() {
  const [cubes, setCubes] = useState<number[][]>([])
  const planeRef = useRef<Mesh>(null)

  useEffect(() => {
    // Create the plane geometry
    const planeGeometry = new PlaneGeometry(10, 10, 2, 2)

    // Extract vertices from the geometry
    const vertices = planeGeometry.attributes.position.array

    // Create cubes at each vertex position
    const cubePositions = []
    for (let i = 0; i < vertices.length; i += 3) {
      cubePositions.push([vertices[i], vertices[i + 1], vertices[i + 2]])
    }

    setCubes(cubePositions)
  }, [])

  return (
    <group rotation-x={Math.PI / 2} position-y={1}>
      <mesh ref={planeRef} rotation={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial side={DoubleSide} color='lightblue' />
      </mesh>

      {cubes.map((position, index) => {
        const [x, y, z] = position // Destructure the array
        return (
          <mesh key={index} position={[x, y, z]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshStandardMaterial color='red' />
          </mesh>
        )
      })}
    </group>
  )
}
