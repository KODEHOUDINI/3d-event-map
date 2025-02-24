import { Grid } from "@react-three/drei";
import { useControls } from "leva";

const EventGrid = () => {
  const { gridSize, ...gridConfig } = useControls({
    gridSize: [10.5, 10.5],
    cellSize: { value: 0.8, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: "#6f6f6f",
    sectionSize: { value: 4, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: "#9d4b4b",
    // fadeDistance: { value: 25, min: 0, max: 100, step: 1 },
    // fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    followCamera: false,
    infiniteGrid: true,
  });
  return <Grid position={[0, -0.5, 0]} args={gridSize} {...gridConfig} />;
};

export default EventGrid;
