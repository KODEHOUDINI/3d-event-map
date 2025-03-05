import React, { useEffect, useRef } from 'react'
import { CameraControls } from '@react-three/drei'
import { useControls } from 'leva'

export default function CameraRig() {
  const camRef = useRef<CameraControls>(null)
  const { sposX, sposY, sposZ, tposX, tposY, tposZ } = useControls({
    sposX: { value: -60, min: -60, max: 50, step: 0.0001 },
    sposY: { value: 11.9, min: -20, max: 20, step: 0.0001 },
    sposZ: { value: -2.69, min: -20, max: 20, step: 0.0001 },
    tposX: { value: 7.75, min: -10, max: 50, step: 0.0001 },
    tposY: { value: 0, min: -20, max: 20, step: 0.0001 },
    tposZ: { value: -3.59, min: -20, max: 20, step: 0.0001 }
  })

  useEffect(() => {
    camRef.current?.setLookAt(sposX, sposY, sposZ, tposX, tposY, tposZ, true)
  }, [sposX, sposY, sposZ, tposX, tposY, tposZ])
  return (
    <>
      <CameraControls
        ref={camRef}
        makeDefault
        smoothTime={1.3}
        minPolarAngle={-Math.PI / 2}
        maxPolarAngle={Math.PI / 2.1}
        polarRotateSpeed={0.5}
        azimuthRotateSpeed={0.5}
        dollySpeed={0.8}
        truckSpeed={0.6}
        minZoom={40}
        maxZoom={140}
        // dampingFactor={0.5}
      />
    </>
  )
}
