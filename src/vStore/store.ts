import { proxy } from 'valtio'

const state = proxy({
  isDrawerOpen: false,
  showRoom: false
})

export { state }
