import React, { useEffect, useState } from "react";
import Header from "@/components/createSlide/Header";
import Toolbar from "@/components/createSlide/Toolbar";
import ToolbarExtentded from "@/components/createSlide/ToolbarExtentded";
import { Stage, Layer, Rect, Circle, RegularPolygon } from "react-konva";
import ResizableRect from "@/components/createSlide/shapes/Rectangle";
import ResizableTriangle from "@/components/createSlide/shapes/Triangle";
import ResizableCircle from "@/components/createSlide/shapes/Circle";
import Rightbar from "@/components/createSlide/Rightbar";

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

  const deleteShape = () => {
    if (!selectedShapeId) return;
    setShapes((prevShapes) =>
      prevShapes.filter((shape) => shape.id !== selectedShapeId)
    );
    setSelectedShapeId(null);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Delete" || e.key === "Backspace") {
        deleteShape();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedShapeId]);

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

              <Rightbar
                users={users}
                editWhiteboard={editWhiteboard}
                setEditWhiteboard={setEditWhiteboard}
                color={color}
                bgColor={bgColor}
                handleColorChange={handleColorChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;
