export const getCenterOfScreen = () => {
  if (typeof window === 'undefined') {
    return 0 // Return 0 or some fallback value during SSR (if you need it)
  }
  const screenWidth = window.innerWidth
  return screenWidth / 2
}
