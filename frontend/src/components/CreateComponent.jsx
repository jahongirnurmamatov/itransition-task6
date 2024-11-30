import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Element from "./createSlide/Element";

const CreateComponent = ({ info, current_component, removeComponent }) => {
  const renderShape = (info) => {
    const isCurrent = current_component.id === info.id;

    const commonStyles = {
      width: info.type === "triangle" ? "0" : info.width + "px",
      height: info.type === "triangle" ? "0" : info.height + "px",
      backgroundColor: info.type === "triangle" ? "transparent" : info.color || "green",
      opacity: info.opacity,
      zIndex: info.z_index,
      top: info.top + "px",
      left: info.left + "px",
      position: "absolute",
      borderRadius: info.type === "circle" ? "50%" : "0%",
    };

    const triangleStyles =
      info.type === "triangle"
        ? {
            borderLeft: `${info.width / 2}px solid transparent`,
            borderRight: `${info.width / 2}px solid transparent`,
            borderBottom: `${info.height}px solid ${info.color || "green"}`,
          }
        : {};

    return (
      <div
        onClick={() => info.setCurrentComponent(info)}
        style={{ ...commonStyles, ...triangleStyles }}
        className={`group hover:border-[2px] hover:border-indigo-500 ${isCurrent ? "relative" : ""}`}
      >
        {/* Snap Element */}
        <Element info={info} isCurrent={isCurrent} />
        {/* Delete Icon */}
        {isCurrent && (
          <div
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent click
              removeComponent(info.id);
            }}
            className="absolute p-1 bg-gray-800 top-2 right-2 cursor-pointer rounded-md"
          >
            <FaTrashAlt className="text-white" />
          </div>
        )}
      </div>
    );
  };

  if (info.name === "main_frame") {
    return (
      <div
        onClick={() => info.setCurrentComponent(info)}
        className="hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: info.width + "px",
          height: info.height + "px",
          backgroundColor: info.color || "#fff",
          zIndex: info.z_index,
        }}
      >
        {info.image && <img className="w-full h-full" src={info.image} alt="frame" />}
      </div>
    );
  }

  if (info.name === "shape" && ["rect", "circle", "triangle"].includes(info.type)) {
    return renderShape(info);
  }

  return null;
};

export default CreateComponent;
