import React from 'react'
import { Rect } from 'react-konva';

const ResizableRect = ({ shape, isSelected, onSelect, onResize, onDragMove }) => {
    const handleSize = 10; 
    const { x, y, width, height, color } = shape;
  
    return (
      <>
        {/* Main Rectangle */}
        <Rect
          x={x}
          y={y}
          width={width}
          height={height}
          fill={color}
          stroke={isSelected ? "blue" : "transparent"}
          strokeWidth={isSelected ? 2 : 0}
          draggable
          onClick={onSelect}
          onDragMove={onDragMove}
        />
  
        {/* Resize Handles */}
        {isSelected && (
          <>
            {/* Top-Left Handle */}
            <Rect
              x={x - handleSize / 2}
              y={y - handleSize / 2}
              width={handleSize}
              height={handleSize}
              fill="white"
              stroke="black"
              strokeWidth={1}
              draggable
              onDragMove={(e) =>
                onResize({
                  x: e.target.x(),
                  y: e.target.y(),
                  width: width + (x - e.target.x()),
                  height: height + (y - e.target.y()),
                })
              }
            />
  
            {/* Bottom-Right Handle */}
            <Rect
              x={x + width - handleSize / 2}
              y={y + height - handleSize / 2}
              width={handleSize}
              height={handleSize}
              fill="white"
              stroke="black"
              strokeWidth={1}
              draggable
              onDragMove={(e) =>
                onResize({
                  width: e.target.x() - x + handleSize / 2,
                  height: e.target.y() - y + handleSize / 2,
                })
              }
            />
          </>
        )}
      </>
    );
  };
  

export default ResizableRect