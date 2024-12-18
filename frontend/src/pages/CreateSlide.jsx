import { useEffect, useRef, useState } from "react";
import Header from "@/components/createSlide/Header";
import Toolbar from "@/components/createSlide/Toolbar";
import ToolbarExtentded from "@/components/createSlide/ToolbarExtentded";
import { Stage, Layer, Image, Text } from "react-konva";
import ResizableRect from "@/components/createSlide/shapes/Rectangle";
import ResizableTriangle from "@/components/createSlide/shapes/Triangle";
import ResizableCircle from "@/components/createSlide/shapes/Circle";
import Rightbar from "@/components/createSlide/Rightbar";
import { useWhiteboardStore } from "@/store/useKonvaStore";
import { useTextStore } from "@/store/textStore";
import ResizableText from "@/components/createSlide/text/ResizableText";
import ResizableImage from "@/components/createSlide/image/ResizableImage";
import { useImageStore } from "@/store/useImageStore";

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

  const {
    bgColor,
    shapes,
    addShape,
    deleteShape,
    selectShape,
    selectedShapeId,
    updateShapePosition,
    updateShapeAttributes,
    setBackgroundSrc,
  } = useWhiteboardStore();

  // image props
  const { images } = useImageStore();

  const backgroundImageRef = useRef(null);
  const [users, setUsers] = useState([]);
  const {
    texts,
    updateTextPosition,
    selectedTextId,
    selectText,
    deleteTextById,
  } = useTextStore((state) => state);

  // Function to load the background image
  const loadBackground = (src) => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      if (backgroundImageRef.current) {
        backgroundImageRef.current.image(img);
        backgroundImageRef.current.getLayer().batchDraw();
      }
    };
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
              setBackground={(src) => {
                setBackgroundSrc(src);
                loadBackground(src); 
              }}
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
                  {/* backgroun image */}
                  <Image
                    ref={backgroundImageRef} 
                    width={750}
                    height={420}
                  />
                  {/* text adding  */}
                  {texts?.map((text) => (
                    <ResizableText
                      key={text.id}
                      text={text}
                      isSelected={selectedTextId === text.id}
                      onSelect={() => selectText(text.id)}
                      onDragMove={(e) =>
                        updateTextPosition(text.id, e.target.x(), e.target.y())
                      }
                      onTextChange={(newText) =>
                        updateTextProperties({ id: text.id, text: newText })
                      }
                      onDelete={() => deleteTextById(text.id)} // New delete handler
                    />
                  ))}
                  {shapes?.map((shape) => {
                    if (shape.type === "rect") {
                      return (
                        <ResizableRect
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => selectShape(shape.id)}
                          onDragMove={(e) =>
                            updateShapePosition(
                              shape.id,
                              e.target.x(),
                              e.target.y()
                            )
                          }
                          onResize={(newAttrs) =>
                            updateShapeAttributes(shape.id, newAttrs)
                          }
                        />
                      );
                    } else if (shape.type === "circle") {
                      return (
                        <ResizableCircle
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => selectShape(shape.id)}
                          onDragMove={(e) =>
                            updateShapePosition(
                              shape.id,
                              e.target.x(),
                              e.target.y()
                            )
                          }
                          onResize={(newAttrs) =>
                            updateShapeAttributes(shape.id, newAttrs)
                          }
                        />
                      );
                    } else if (shape.type === "triangle") {
                      return (
                        <ResizableTriangle
                          key={shape.id}
                          shape={shape}
                          isSelected={selectedShapeId === shape.id}
                          onSelect={() => selectShape(shape.id)}
                          onDragMove={(e) =>
                            updateShapePosition(
                              shape.id,
                              e.target.x(),
                              e.target.y()
                            )
                          }
                          onResize={(newAttrs) =>
                            updateShapeAttributes(shape.id, newAttrs)
                          }
                        />
                      );
                    }
                    return null;
                  })}

                  {/* images insert */}
                  {images.map((image) => (
                    <ResizableImage
                      key={image.id}
                      image={image}
                    />
                  ))}
                </Layer>
              </Stage>

              <Rightbar users={users} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;
