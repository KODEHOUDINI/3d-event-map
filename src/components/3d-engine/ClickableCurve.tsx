import { MouseEvent, useMemo, useState } from 'react'
import { PivotControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'

export default function ClickableCurve() {
  const { camera, scene } = useThree()
  const [points, setPoints] = useState<THREE.Vector3[]>([])
  const [selectedPoint, setSelectedPoint] = useState<number | null>(null)
  const [dragStartPosition, setDragStartPosition] =
    useState<THREE.Vector3 | null>(null)

  let clickTimeout: NodeJS.Timeout | null = null

  const handleDoubleClick = (event: MouseEvent) => {
    const raycaster = new THREE.Raycaster()
    const mouse = new THREE.Vector2()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children, true)

    if (intersects.length > 0) {
      const clickedPoint = intersects[0].point.clone()
      setPoints(prev => [...prev, clickedPoint])
    }
  }

  const handleClick = (event: MouseEvent) => {
    if (clickTimeout) {
      clearTimeout(clickTimeout)
      clickTimeout = null
      handleDoubleClick(event)
    } else {
      clickTimeout = setTimeout(() => {
        clickTimeout = null
      }, 250) // Delay to differentiate single vs double click
    }
  }

  const curve = useMemo(() => {
    if (points.length < 2) return null
    return new THREE.CatmullRomCurve3(points, false, 'centripetal') // "centripetal" makes it smoother
  }, [points])

  return (
    <>
      {/* Control points with manipulation capability */}
      {points.map((point, index) => (
        <PivotControls
          key={index}
          anchor={[0, 0, 0]}
          scale={50}
          fixed
          lineWidth={2}
          disableScaling
          disableRotations
          onDragStart={() => {
            setDragStartPosition(points[index].clone()) // Store initial position
          }}
          onDrag={matrix => {
            if (!dragStartPosition) return

            const newPoints = [...points]
            const position = new THREE.Vector3()
            const quaternion = new THREE.Quaternion()
            const scale = new THREE.Vector3()
            matrix.decompose(position, quaternion, scale) // Extract position

            // Apply offset relative to initial drag start
            const delta = position.sub(new THREE.Vector3(0, 0, 0)) // Offset from identity matrix
            newPoints[index] = dragStartPosition.clone().add(delta)

            setPoints(newPoints) // Recompute curve
          }}
        >
          <mesh position={point} onPointerDown={() => setSelectedPoint(index)}>
            <sphereGeometry args={[0.1, 10, 10]} />
            <meshStandardMaterial
              color={selectedPoint === index ? 'yellow' : 'red'}
            />
          </mesh>
        </PivotControls>
      ))}

      {/* Render curve dynamically */}
      {curve && (
        <mesh>
          <tubeGeometry args={[curve, 500, 0.05, 18, false]} />
          <meshStandardMaterial color='white' />
        </mesh>
      )}

      {/* Clickable plane for adding points */}
      <mesh
        onClick={handleClick}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial side={THREE.DoubleSide} transparent opacity={0.5} />
      </mesh>
    </>
  )
}
