'use client'

import { state } from '@/vStore/store'
import { useSnapshot } from 'valtio'

import Chair from '../3d-models/Chair'
import Floor from '../3d-models/Floor'

export default function ModelsHub() {
  const snap = useSnapshot(state)

  return (
    <>
      {' '}
      {/* <Floor /> */}
      <Floor />
      {snap.chairAdded && <Chair />}
    </>
  )
}
