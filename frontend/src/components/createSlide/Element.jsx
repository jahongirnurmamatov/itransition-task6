import React from "react";

const Element = ({ info, isCurrent }) => {
  const positionStyles = {};

  if (info.type === "triangle") {
    positionStyles.bottom = "-5px"; // Bottom-center of the triangle base
    positionStyles.left = "50%";
    positionStyles.transform = "translateX(-50%)";
  } else {
    // Default for other shapes (rect and circle)
    positionStyles.bottom = "-3px";
    positionStyles.right = "-3px";
  }

  return (
    <div onMouseDown={()=>info.resizeElement(exId,info)}
      className={`absolute w-[10px] h-[10px] bg-green-500 ${
        info.type === "triangle" ? "cursor-s-resize" : "cursor-nwse-resize"
      } z-[9999]`}
      style={{
        ...positionStyles,
        display: isCurrent ? "block" : "none", // Always show if current
      }}
    ></div>
  );
};

export default Element;
