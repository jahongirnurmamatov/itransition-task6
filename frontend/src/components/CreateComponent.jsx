import React from "react";
import { FaTrashAlt } from "react-icons/fa";
const CreateComponent = ({ info, current_component, removeComponent }) => {
  const randValue = Math.floor(Math.random() * 100);
  let html = "";
  if (info.name === "main_frame") {
    html = (
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
         {info.image && <img className="w-full h-full" src={info.image} alt="image" />}
      </div>
    );
  }
  console.log(info.image)
  if (info.name === "shape" && info.type === "rect") {
    html = (
      <div
        id={randValue}
        onClick={() => info.setCurrentComponent(info)}
        style={{
          width: info.width + "px",
          height: info.height + "px",
          backgroundColor: info.color || "green",
          borderRadius: info.radius + "%",
          opacity: info.opacity,
          zIndex: info.z_index,
          top: info.top + "px",
          left: info.left + "px",
        }}
        className="absolute group hover:border-[2px] hover:border-indigo-500"
      >
        {current_component.id === info.id && (
          <div
            onClick={() => removeComponent(info.id)}
            className="absolute p-1 bg-gray-800 top-0 cursor-pointer group-hover:block hidden rounded-md"
          >
            {" "}
            <FaTrashAlt />{" "}
          </div>
        )}
      </div>
    );
  }
  return html;
};

export default CreateComponent;
