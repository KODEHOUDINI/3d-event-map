'use client'

import React, { useRef } from 'react'
import { state } from '@/vStore/store'
import { useGSAP } from '@gsap/react'
import { PivotControls, useGLTF } from '@react-three/drei'
import { gsap } from 'gsap'
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'

export default function Chair() {
  const { nodes, materials } = useGLTF('/3d-models/Chair.glb')
  const snap = useSnapshot(state)
  const chairRef = useRef<Mesh>(null)
  const chairTl = gsap.timeline()

  useGSAP(() => {
    if (chairRef.current && snap.chairAdded) {
      const target = {
        scale: 0,
        rotation: 0
      }

      chairTl.fromTo(
        target,
        { scale: 0, rotation: 0 },
        {
          scale: 1,
          rotation: Math.PI * 2,
          duration: 0.6,
          ease: 'power2.out',
          onUpdate: () => {
            chairRef.current?.scale.set(
              target.scale,
              target.scale,
              target.scale
            )
            chairRef.current?.rotation.set(0, target.rotation, 0)
            // chairRef.current?.rotation.y = target.rotation;
          }
        }
      )
    }
  }, [])

  return (
    <group dispose={null}>
      {/* <TransformControls
        mode='translate'
        object={scene.getObjectByName('Chair')}
      /> */}
      <PivotControls
        rotation={[0, -Math.PI / 2, 0]}
        anchor={[1, -1, -0.5]}
        scale={75}
        // depthTest={false}
        fixed
        lineWidth={2}
        disableScaling
        // disableRotations
      >
        <group name='Chair' ref={chairRef}>
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Chair_1 as Mesh).geometry}
            material={materials.Frame}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={(nodes.Chair_2 as Mesh).geometry}
            material={materials.Cushion}
          />
        </group>
      </PivotControls>
    </group>
  )
}

useGLTF.preload('/3d-models/Chair.glb')
