import { useEffect, useRef } from "react";
import { Text, Transformer } from "react-konva";

const ResizableText = ({
  text,
  isSelected,
  onSelect,
  onDragMove,
  onDelete,
}) => {
  const textRef = useRef(); // Ref for the Text node
  const transformerRef = useRef(); // Ref for the Transformer

  // Add keydown listener for delete functionality
  useEffect(() => {
    const handleDeleteKey = (e) => {
      if (isSelected && (e.key === "Delete" || e.key === "Backspace")) {
        onDelete();
      }
    };

    window.addEventListener("keydown", handleDeleteKey);
    return () => {
      window.removeEventListener("keydown", handleDeleteKey);
    };
  }, [isSelected, onDelete]);

  // Attach the Transformer to the Text node when selected
  useEffect(() => {
    if (isSelected && transformerRef.current && textRef.current) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Text
        ref={textRef} // Attach ref to the Text node
        x={text.x}
        y={text.y}
        text={text.text}
        fontSize={text.fontSize}
        fill={text.fontColor}
        fontFamily={text.fontFamily}
        draggable
        onClick={onSelect}
        onDragMove={onDragMove}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef} // Attach ref to the Transformer
          borderEnabled={true}
          borderStroke="blue"
          anchorSize={5}
          anchorStroke="blue"
          keepRatio={false}
        />
      )}
    </>
  );
};

export default ResizableText;
