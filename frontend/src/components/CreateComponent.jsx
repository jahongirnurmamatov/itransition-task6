import React from "react";

const CreateComponent = ({ info, current_component, removeComponent }) => {
  const randValue = Math.floor(Math.random() * 100);
  let html = "";
  if (info.name === "main_frame") {
    html = (
      <div
        className="hover:border-[2px] hover:border-indigo-500 shadow-md"
        style={{
          width: info.height + "px",
          height: info.width + "px",
          backgroundColor: info.color || '#fff',
          zIndex: info.z_index,
        }}
      >
    
        {info.img && (
          <img className="w-full h-full" src={info.image} alt="image" />
        )}
      </div>
    );
  }
  return html;
};

export default CreateComponent;