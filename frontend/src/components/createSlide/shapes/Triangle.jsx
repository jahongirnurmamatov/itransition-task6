
import { Circle, RegularPolygon } from "react-konva";

const ResizableTriangle = ({
  shape,
  isSelected,
  onSelect,
  onDragMove,
  onResize,
}) => {
  const handleSize = 10;
  const { x, y, sides, radius, color } = shape;

  return (
    <>
      {/* Main Triangle */}
      <RegularPolygon
        x={x}
        y={y}
        sides={sides}
        radius={radius}
        fill={color}
        stroke={isSelected ? "blue" : "transparent"}
        strokeWidth={isSelected ? 2 : 0}
        draggable
        onClick={onSelect}
        onDragMove={onDragMove}
      />

      {/* Resize Handle */}
      {isSelected && (
        <Circle
          x={x + radius} // Position at the edge
          y={y}
          radius={handleSize / 2}
          fill="white"
          stroke="black"
          strokeWidth={1}
          draggable
          onDragMove={(e) => {
            const newRadius = Math.max(e.target.x() - x, handleSize); // Ensure minimum size
            onResize({ radius: newRadius });
          }}
        />
      )}
    </>
  );
};

export default ResizableTriangle;

