import React, { useEffect, useRef } from 'react'
import { state } from '@/vStore/store'
import { CameraControls } from '@react-three/drei'
import { useSnapshot } from 'valtio'

export default function CameraRig() {
  const snap = useSnapshot(state)

  const camRef = useRef<CameraControls>(null)
  // const { sposX, sposY, sposZ, tposX, tposY, tposZ } = useControls({
  //   sposX: { value: 6.4626, min: -60, max: 50, step: 0.0001 },
  //   sposY: { value: 25.2, min: -20, max: 50, step: 0.0001 },
  //   sposZ: { value: 0.029, min: -20, max: 20, step: 0.0001 },
  //   tposX: { value: 6.4626, min: -10, max: 50, step: 0.0001 },
  //   tposY: { value: 0, min: -20, max: 20, step: 0.0001 },
  //   tposZ: { value: 0.0299, min: -20, max: 20, step: 0.0001 }
  // })

  // useEffect(() => {
  //   snap.showRoom == false &&
  //     camRef.current?.setLookAt(-25, 28, 20, 7.75, 0, -3.59, true)
  // }, [])

  useEffect(() => {
    if (snap.showRoom) {
      camRef.current?.setLookAt(6.4626, 25.2, 0.029, 6.4626, 0, 0.0299, true)
    } else {
      camRef.current?.setLookAt(-25, 28, 20, 7.75, 0, -3.59, true)
    }
  }, [snap.showRoom])

  return (
    <>
      <CameraControls
        ref={camRef}
        makeDefault
        smoothTime={1}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 3}
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
