import React from 'react'
import { state } from '@/vStore/store'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'
import { useSnapshot } from 'valtio'

export default function MapIcons() {
  const { nodes } = useGLTF('/3d-models/Buildings/LocationPinAssets.glb')
  const snap = useSnapshot(state)

  return (
    <>
      <mesh
        visible={!snap.showRoom}
        geometry={(nodes.Destination as Mesh).geometry}
        position={[6.4626, 4, 0.0299]}
        scale={2}
      >
        <meshStandardMaterial color='red' />
      </mesh>
    </>
  )
}
