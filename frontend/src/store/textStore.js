import { create } from "zustand";

export const useTextStore = create((set) => ({
  textProperties: {
    fontSize: 20,
    fontColor: "#000000",
    fontFamily: "Arial",
    text: "",
  },
  texts: [],
  selectedTextId: null,

  addText: (text) => set((state) => ({ texts: [...state.texts, text] })),

  updateTextProperties: (newProperties) =>
    set((state) => ({
      textProperties: { ...state.textProperties, ...newProperties },
    })),

  updateTextPosition: (id, x, y) =>
    set((state) => ({
      texts: state.texts.map((text) =>
        text.id === id ? { ...text, x, y } : text
      ),
    })),

  updateTextSize: (id, width, height) =>
    set((state) => ({
      texts: state.texts.map((text) =>
        text.id === id ? { ...text, width, height } : text
      ),
    })),

  deleteTextById: (id) =>
    set((state) => ({
      texts: state.texts.filter((text) => text.id !== id),
    })),

  updateFontFamily: (fontFamily) =>
    set((state) => ({
      textProperties: { ...state.textProperties, fontFamily },
    })),

  selectText: (id) => set({ selectedTextId: id }),
}));
