import React, { useState } from "react";
import Header from "@/components/createSlide/Header";
import Toolbar from "@/components/createSlide/Toolbar";
import ToolbarExtentded from "@/components/createSlide/ToolbarExtentded";
import { Stage, Layer, Rect, Circle, RegularPolygon } from "react-konva";
import ResizableRect from "@/components/createSlide/shapes/Rectangle";
import ResizableTriangle from "@/components/createSlide/shapes/Triangle";
import ResizableCircle from "@/components/createSlide/shapes/Circle";

const CreateSlide = () => {
  const [state, setState] = useState("");
  const [show, setShow] = useState({
    status: true,
    name: "",
  });
  const setElements = (type, name) => {
    setState(type);
    setShow({
      state: false,
      name,
    });
  };
  const [shapes, setShapes] = useState([]);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [color, setColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FFFFFF"); // Whiteboard background color
  const [editWhiteboard, setEditWhiteboard] = useState(false); // Toggle for whiteboard color editing
  const [defaultShapeColor, setDefaultShapeColor] = useState("#000000");
  // Function to add shapes
  const addShape = (type) => {
    const id = `${type}-${Date.now()}`;
    const newShape =
      type === "rect"
        ? {
            id,
            type,
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            color: defaultShapeColor,
          }
        : type === "circle"
        ? { id, type, x: 100, y: 100, radius: 50, color: defaultShapeColor }
        : {
            id,
            type,
            x: 150,
            y: 150,
            sides: 3,
            radius: 60,
            color: defaultShapeColor,
          }; // triangle
    setShapes((prev) => [...prev, newShape]);
  };

  const handleResizeShape = () => {
    if (!selectedShapeId) return;

    setShapes((prevShapes) =>
      prevShapes.map((shape) => {
        if (shape.id === selectedShapeId) {
          if (shape.type === "rect") {
            return {
              ...shape,
              width: shape.width + 10,
              height: shape.height + 10,
            };
          } else if (shape.type === "circle" || shape.type === "triangle") {
            return {
              ...shape,
              radius: shape.radius + 10,
            };
          }
        }
        return shape;
      })
    );
  };

  const handleSelect = (id) => {
    setSelectedShapeId(id);
  };

  const handleDragMove = (id, e) => {
    setShapes((prev) =>
      prev.map((shape) =>
        shape.id === id ? { ...shape, x: e.target.x(), y: e.target.y() } : shape
      )
    );
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;

    if (editWhiteboard) {
      setBgColor(newColor);
    } else if (selectedShapeId) {
      setShapes((prev) =>
        prev.map((shape) =>
          shape.id === selectedShapeId ? { ...shape, color: newColor } : shape
        )
      );
    } else {
      setDefaultShapeColor(newColor); 
    }

    setColor(newColor);
  };
  const [users, setUsers] = useState([]); 

  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <Toolbar show={show} setElements={setElements} />
        <div className="h-full w-[calc(100%-75px)] flex">
          <div className="flex-grow flex ">
            <ToolbarExtentded
              show={show}
              state={state}
              setShow={setShow}
              addShape={addShape}
            />
            <div className="w-full flex justify-between h-full ml-30">
              <Stage
                width={750}
                height={420}
                className="border bg-gray-100 ml-32 mt-12"
                style={{
                  margin: "auto",
                  backgroundColor: bgColor,
                }}
              >
                <Layer>
                  {shapes.map((shape) => {
                    if (shape.type === "rect") {
                      return (
                        <ResizableRect
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => handleSelect(shape.id)}
                          onDragMove={(e) => handleDragMove(shape.id, e)}
                          onResize={(newAttrs) =>
                            setShapes((prevShapes) =>
                              prevShapes.map((s) =>
                                s.id === shape.id ? { ...s, ...newAttrs } : s
                              )
                            )
                          }
                        />
                      );
                    } else if (shape.type === "circle") {
                      return (
                        <ResizableCircle
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => handleSelect(shape.id)}
                          onDragMove={(e) => handleDragMove(shape.id, e)}
                          onResize={(newAttrs) =>
                            setShapes((prevShapes) =>
                              prevShapes.map((s) =>
                                s.id === shape.id ? { ...s, ...newAttrs } : s
                              )
                            )
                          }
                        />
                      );
                    } else if (shape.type === "triangle") {
                      return (
                        <ResizableTriangle
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => handleSelect(shape.id)}
                          onDragMove={(e) => handleDragMove(shape.id, e)}
                          onResize={(newAttrs) =>
                            setShapes((prevShapes) =>
                              prevShapes.map((s) =>
                                s.id === shape.id ? { ...s, ...newAttrs } : s
                              )
                            )
                          }
                        />
                      );
                    }
                    return null;
                  })}
                </Layer>
              </Stage>

              <div className="w-[300px] mr-0 bg-gray-900 text-white p-4">
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
                      onChange={handleColorChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </label>
                  <button
                    className="mt-4 px-4 py-2 bg-gray-800 rounded text-sm"
                    onClick={() => setEditWhiteboard((prev) => !prev)}
                  >
                    {editWhiteboard ? "Edit Shape" : "Edit Whiteboard"}
                  </button>
                  <h4 className="text-sm font-semibold mb-2">
                    Resize Selected Shape
                  </h4>
                  <button
                    onClick={handleResizeShape}
                    className="px-4 py-2 bg-gray-800 text-white rounded"
                    disabled={!selectedShapeId} // Disable if no shape is selected
                  >
                    Increase Size
                  </button>
                </div>

                {/* Section 2: Connected Users */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    Connected Users
                  </h4>
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
            </div>

            {/* sidebar here*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;
