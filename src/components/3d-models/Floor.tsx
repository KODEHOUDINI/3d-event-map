'use client'

import React, { useEffect, useRef } from 'react'
import { state } from '@/vStore/store'
import { TransformControls, useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { damp3 } from 'maath/easing' // Import damp3 for easing
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'

export default function Floor() {
  const snap = useSnapshot(state)
  const floorRef = useRef<Mesh>(null)
  const { nodes, materials } = useGLTF('/3d-models/Floor.glb')

  const initialScale = { x: 0, y: 0, z: 0 } // Initial scale values
  const finalScale = { x: 13, y: 0.2, z: 13 } // Target scale values

  const animationDuration = 8 // Animation duration in seconds (you can tweak this)
  const dampingFactor = 1 / animationDuration // Dynamic damping factor based on animation duration

  useEffect(() => {
    const floor = floorRef.current
    if (floor) {
      floor.scale.set(initialScale.x, initialScale.y, initialScale.z) // Set initial scale
    }
  }, [])

  useFrame((state, delta) => {
    const floor = floorRef.current
    if (!floor) return

    if (snap.floorAdded) {
      // Scaling sequence: Y -> X -> Z

      // First scale on Y axis
      damp3(
        floor.scale,
        [floor.scale.x, finalScale.y, floor.scale.z],
        dampingFactor,
        delta
      )

      // Once Y scaling is done, scale on X axis
      if (Math.abs(floor.scale.y - finalScale.y) < 0.01) {
        damp3(
          floor.scale,
          [finalScale.x, floor.scale.y, floor.scale.z],
          dampingFactor,
          delta
        )
      }

      // Once X scaling is done, scale on Z axis
      if (Math.abs(floor.scale.x - finalScale.x) < 0.01) {
        damp3(
          floor.scale,
          [floor.scale.x, floor.scale.y, finalScale.z],
          dampingFactor,
          delta
        )
      }
    } else {
      // Reverse sequence: Z -> X -> Y

      // Scale on Z axis first
      damp3(
        floor.scale,
        [floor.scale.x, floor.scale.y, initialScale.z],
        dampingFactor,
        delta
      )

      // Once Z scaling is done, scale on X axis
      if (Math.abs(floor.scale.z - initialScale.z) < 0.01) {
        damp3(
          floor.scale,
          [initialScale.x, floor.scale.y, floor.scale.z],
          dampingFactor,
          delta
        )
      }

      // Once X scaling is done, scale on Y axis
      if (Math.abs(floor.scale.x - initialScale.x) < 0.01) {
        damp3(
          floor.scale,
          [floor.scale.x, initialScale.y, floor.scale.z],
          dampingFactor,
          delta
        )
      }
    }
  })

  const scene = useThree(state => state.scene)
  console.log(scene)

  return (
    <group dispose={null}>
      {snap.floorAdded && (
        <TransformControls
          mode='translate'
          object={scene.getObjectByName('Floor')}
        />
      )}
      <mesh
        castShadow
        receiveShadow
        name={'Floor'}
        ref={floorRef}
        geometry={(nodes.Floor as Mesh).geometry}
        material={materials.FloorMat}
      />
    </group>
  )
}

useGLTF.preload('/3d-models/Floor.glb')
