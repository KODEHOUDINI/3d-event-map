import { Grid } from '@react-three/drei'

const EventGrid = () => {
  const gridConfig = {
    cellSize: 0.8,
    cellThickness: 1,
    cellColor: '#6f6f6f',
    sectionSize: 4,
    sectionThickness: 1.5,
    sectionColor: '#9d4b4b',
    followCamera: false,
    infiniteGrid: true
  }

  return <Grid position={[0, -0.1, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

export default EventGrid
