'use client'

import React, { useRef } from 'react'
import { state } from '@/vStore/store'
import { useGSAP } from '@gsap/react'
import { PivotControls, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'

export default function Floor() {
  const floorRef = useRef<Mesh>(null)
  const { nodes, materials } = useGLTF('/3d-models/Floor.glb')

  const snap = useSnapshot(state)

  const floorTl = gsap.timeline()

  useGSAP(() => {
    // The new hook will take care of context and life cicle.
    if (floorRef.current && snap.floorAdded) {
      floorTl.fromTo(
        // Creates the animation
        floorRef.current.scale,
        { x: 0, y: 0, z: 0 }, // Initial position
        {
          x: 13,
          y: 0.03,
          z: 13, // Final position
          ease: 'power2.out', // Easing function
          duration: 0.9 // Duration
        }
      )
    }
  }, {}) //Dependencies, if you have

  return (
    <group dispose={null}>
      <PivotControls
        rotation={[0, -Math.PI / 2, 0]}
        anchor={[1, -1, -1]}
        scale={75}
        fixed
        lineWidth={2}
        disableScaling
        disableRotations
        visible={false}
      >
        <mesh
          castShadow
          receiveShadow
          // name={'Floor'}
          ref={floorRef}
          geometry={(nodes.Floor as Mesh).geometry}
          material={materials.FloorMat}
        />
      </PivotControls>
    </group>
  )
}

useGLTF.preload('/3d-models/Floor.glb')
