import React from 'react'
import { CameraControls } from '@react-three/drei'

export default function CameraRig() {
  return (
    <>
      <CameraControls
        makeDefault
        smoothTime={0.8}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2.1}
        polarRotateSpeed={0.2}
        azimuthRotateSpeed={0.2}
        dollySpeed={0.5}
        truckSpeed={0.4}
        minZoom={40}
        maxZoom={140}
        dampingFactor={0.05}
      />
    </>
  )
}
