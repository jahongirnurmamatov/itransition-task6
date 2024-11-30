import {create} from "zustand";

export const useWhiteboardStore = create((set,get) => ({
  // Whiteboard properties
  bgColor: "#FFFFFF",
  setBgColor: (color) => set({ bgColor: color }),

  // Background image
  backgroundSrc: "",
  setBackgroundSrc: (src) => set({ backgroundSrc: src }),

  // Shapes
  shapes: [],
  selectedShapeId: null,
  defaultShapeColor: "#000000",

  // Add shape
  addShape: (type) => {
    const id = `${type}-${Date.now()}`;
    const newShape =
      type === "rect"
        ? { id, type, x: 50, y: 50, width: 100, height: 100, color: "#000000" }
        : type === "circle"
        ? { id, type, x: 100, y: 100, radius: 50, color: "#000000" }
        : { id, type, x: 150, y: 150, sides: 3, radius: 60, color: "#000000" }; // triangle
    set((state) => ({ shapes: [...state.shapes, newShape] }));
  },

  // Delete shape
  deleteShape: () =>
    set((state) => ({
      shapes: state.shapes.filter((shape) => shape.id !== state.selectedShapeId),
      selectedShapeId: null,
    })),

  // Select shape
  selectShape: (id) => set({ selectedShapeId: id }),

  // Update shape position
  updateShapePosition: (id, x, y) =>
    set((state) => ({
      shapes: state.shapes.map((shape) =>
        shape.id === id ? { ...shape, x, y } : shape
      ),
    })),

  // Update shape attributes (resize, color)
  updateShapeAttributes: (id, newAttrs) =>
    set((state) => ({
      shapes: state.shapes.map((shape) =>
        shape.id === id ? { ...shape, ...newAttrs } : shape
      ),
    })),

    // change the color 
    editWhiteboard: false,
    selectedShapeId: null,
    shapes: [],
  
    // Methods
    setBgColor: (color) => set({ bgColor: color }),
    setEditWhiteboard: () => set((state) => ({ editWhiteboard: !state.editWhiteboard })),

    // Method to change color of background or shape
    handleColorChange: (newColor) => {
      const { editWhiteboard, selectedShapeId, shapes } = get();
  
      if (editWhiteboard) {
        set({ bgColor: newColor });
      } else if (selectedShapeId) {
        const updatedShapes = shapes.map((shape) =>
          shape.id === selectedShapeId ? { ...shape, color: newColor } : shape
        );
        set({ shapes: updatedShapes });
      } else {
        set({ color: newColor });
      }
    },
}));
