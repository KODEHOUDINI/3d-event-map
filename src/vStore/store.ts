import { proxy } from 'valtio'

const state = proxy({
  isDrawerOpen: false
})

export { state }
