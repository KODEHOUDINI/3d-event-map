'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { Mesh } from 'three'

export default function Floor() {
  const floorRef = useRef<Mesh>(null)
  const { nodes, materials } = useGLTF('/3d-models/Floor.glb')

  const floorTl = gsap.timeline()

  useGSAP(() => {
    // The new hook will take care of context and life cicle.
    if (floorRef.current) {
      floorTl.fromTo(
        // Creates the animation
        floorRef.current.scale,
        { x: 0, y: 0, z: 0 }, // Initial position
        {
          x: 500,
          y: 0.01,
          z: 500, // Final position
          ease: 'power2.out', // Easing function
          duration: 0.9 // Duration
        }
      )
    }
  }, {}) //Dependencies, if you have

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        // name={'Floor'}
        ref={floorRef}
        geometry={(nodes.Floor as Mesh).geometry}
        material={materials.FloorMat}
      />
    </group>
  )
}

useGLTF.preload('/3d-models/Floor.glb')
