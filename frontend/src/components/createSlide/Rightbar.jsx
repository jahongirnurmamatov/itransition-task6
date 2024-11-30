import { useWhiteboardStore } from "@/store/useKonvaStore";
import React, { useState } from "react";

const Rightbar = ({ users }) => {
  const { color, bgColor, editWhiteboard, handleColorChange,setEditWhiteboard } = useWhiteboardStore();
 
  return (
    <div className="w-[300px] mr-0 bg-[#181918]  text-white p-4">
      <h3 className="text-lg font-bold mb-4">Sidebar</h3>

      {/* Section 1: Color Picker */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2">Change Color</h4>
        <label
          className="block w-8 h-8 rounded cursor-pointer border relative"
          style={{
            backgroundColor: editWhiteboard ? bgColor : color,
          }}
        >
          {/* Hidden input */}
          <input
            type="color"
            value={editWhiteboard ? bgColor : color}
            onChange={(e) => handleColorChange(e.target.value)} // Fixed typo here
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </label>
        <button
          className="mt-4 px-4 py-2 bg-gray-800 rounded text-sm"
          onClick={setEditWhiteboard}
        >
          {editWhiteboard ? "Edit Shape" : "Edit Whiteboard"}
        </button>
      </div>

      {/* Section 2: Connected Users */}
      <div>
        <h4 className="text-sm font-semibold mb-2">Connected Users</h4>
        <ul className="space-y-2">
          {users.map((user, index) => (
            <li
              key={index}
              className="p-2 bg-gray-800 rounded-lg text-sm truncate"
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rightbar;
