import { useTextStore } from "@/store/textStore";
import React, { useState, useEffect } from "react";

const Text = () => {
  const { textProperties, addText, updateTextProperties, updateFontFamily } =
    useTextStore((state) => state);

  const [fontSize, setFontSize] = useState(textProperties.fontSize);
  const [fontColor, setFontColor] = useState(textProperties.fontColor);
  const [fontFamily, setFontFamily] = useState(textProperties.fontFamily);
  const [textInput, setTextInput] = useState(""); // For textarea input

  useEffect(() => {
    updateFontFamily(fontFamily);
  }, [fontFamily, updateFontFamily]);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
    updateTextProperties({ fontSize: e.target.value });
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
    updateTextProperties({ fontColor: e.target.value });
    // Add a style attribute to the text element
    const textElement = document.getElementById("text-element");
    textElement.style.color = e.target.value;
  };

  const handleAddText = () => {
    if (textInput.trim() === "") return; // Avoid adding empty text
    const newText = {
      id: Date.now().toString(),
      text: textInput, // Use the text entered in the textarea
      fontSize: fontSize,
      fontColor: fontColor,
      fontFamily: fontFamily,
      x: 100, // Default position
      y: 100, // Default position
      width: 200, // Default width
      height: 40, // Default height
    };
    addText(newText); // Add the new text to the state
    setTextInput(""); // Clear the textarea after adding the text
  };

  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="cursor-pointer font-bold p-3 flex items-center justify-center text-white text-xl rounded-sm">
        <h2>Adding Text</h2>
      </div>

      {/* Text Input Area */}
      <div>
        <label className="text-sm text-gray-400">Enter Your Text</label>
        <textarea
          id="text-element"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full p-2 rounded mt-2 bg-[#3c3c3d] text-white"
          rows="3"
          placeholder="Write your text here..."
        ></textarea>
      </div>

      {/* Font Selector */}
      <div>
        <label className="text-sm text-gray-400">Font</label>
        <select
          className="w-full p-2 rounded mt-2 bg-[#3c3c3d] text-white"
          value={fontFamily}
          onChange={(e) => setFontFamily(e.target.value)}
        >
          <option value="Arial">Arial</option>
          <option value="Roboto">Roboto</option>
          <option value="Lobster">Lobster</option>
          <option value="Poppins">Poppins</option>
        </select>
      </div>

      {/* Font Size */}
      <div>
        <label className="text-sm text-gray-400">Font Size</label>
        <input
          type="number"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="w-full p-2 rounded mt-2 bg-[#3c3c3d] text-white"
          min={10}
          max={100}
        />
      </div>

      {/* Font Color */}
      <div>
        <label className="text-sm text-gray-400">Font Color</label>
        <input
          type="color"
          value={fontColor}
          onChange={(e) => setFontColor(e.target.value)}
          className="w-10 h-10 rounded-sm border-2 border-gray-400"
          style={{ padding: 0, border: "none" }}
        />
      </div>

      {/* Button to add text */}
      <button
        onClick={handleAddText}
        className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm text-white"
      >
        Add Text
      </button>
    </div>
  );
};

export default Text;
