import React, { useState } from "react";
import { useUserStore } from "../store/userStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [nickname, setNickname] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const connectSocket = useUserStore((state) => state.connectSocket);

  const navigate = useNavigate();
  const handleLogin = () => {
    if (nickname.trim()) {
      setUser(nickname);
      connectSocket();
    } else {
      alert("Please enter a nickname.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center gap-10">
      <h1 className="text-4xl font-bold">
        Welcome to{" "}
        <span className="text-4xl text-blue-500">
          My<span className="font-bold text-blue-800">SLIDES</span>
        </span>
      </h1>
      <form onSubmit={()=>navigate("/")}>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
          />
        </label>
      </form>
    </div>
  );
};

export default Login;
