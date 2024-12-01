import { useEffect } from "react";
import { Image, Transformer } from "react-konva";


const ResizableImage = ({ image, onSelect, onDragMove, onTransformEnd, onDelete }) => {
  const { selectedImageId, deleteImage } = useImageStore();

  const handleDeleteKey = (e) => {
    if (selectedImageId === image.id && (e.key === "Delete" || e.key === "Backspace")) {
      deleteImage(image.id);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleDeleteKey);
    return () => {
      window.removeEventListener("keydown", handleDeleteKey);
    };
  }, [selectedImageId]);

  return (
    <>
      <Image
        x={image.x}
        y={image.y}
        width={image.width}
        height={image.height}
        image={image.src}
        draggable
        onClick={onSelect}
        onDragMove={(e) => onDragMove(image.id, e.target.x(), e.target.y())}
        onDragEnd={(e) => onDragMove(image.id, e.target.x(), e.target.y())}
      />
      {selectedImageId === image.id && (
        <Transformer
          node={image}
          onTransformEnd={() => onTransformEnd(image.id, image.width(), image.height())}
        />
      )}
    </>
  );
};

export default ResizableImage;
