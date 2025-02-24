import { proxy } from 'valtio'

const state = proxy({
  isDrawerOpen: false,
  floorAdded: false,
  chairAdded: false,
  stageAdded: false,
  speakerAdded: false,
  tableAdded: false
})

export { state }
