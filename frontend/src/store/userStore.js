import { create } from "zustand";
import { io } from "socket.io-client";

export const useUserStore = create((set) => ({
  user: null,
  socket: null,

  // Set the username
  setUser: (user) => set({ user }),

  clearUser: () => {
    set({ user: null, socket: null });
    if (useUserStore.getState().socket) {
      useUserStore.getState().socket.disconnect();
    }
  },


  connectSocket: () => {
    const { user } = useUserStore.getState();
 
    if (!user) {
      console.error("Cannot connect socket without a username.");
      return;
    }
    
    const socket = io("http://localhost:5000", {
      query: { username: user }, 
      withCredentials: true,   
    });

  
    socket.on("connect", () => {
      console.log("Connected to server with socket ID:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server.");
    });

    set({ socket });
  },
}));
