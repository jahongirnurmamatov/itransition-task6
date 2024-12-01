import {create} from 'zustand';

export const useImageStore = create((set) => ({
  images: [],
  selectedImageId: null,
  addImage: (src, x = 100, y = 100) => {
    set((state) => ({
      images: [
        ...state.images,
        { id: Date.now(), src, x, y, width: 100, height: 100 }
      ]
    }));
  },
  deleteImage: (id) => {
    set((state) => ({
      images: state.images.filter((img) => img.id !== id)
    }));
  },
  selectImage: (id) => {
    set({ selectedImageId: id });
  },
  updateImagePosition: (id, x, y) => {
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, x, y } : img
      )
    }));
  },
  updateImageSize: (id, width, height) => {
    set((state) => ({
      images: state.images.map((img) =>
        img.id === id ? { ...img, width, height } : img
      )
    }));
  }
}));
