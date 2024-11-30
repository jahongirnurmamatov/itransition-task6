import { Circle } from "react-konva";

const ResizableCircle = ({ shape, isSelected, onSelect, onDragMove, onResize }) => {
  const handleSize = 10; 
  const { x, y, radius, color } = shape;

  return (
    <>
      {/* Main Circle */}
      <Circle
        x={x}
        y={y}
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
          x={x + radius} // Position at the circle's edge
          y={y}
          radius={handleSize / 2}
          fill="green"
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

export default ResizableCircle;
