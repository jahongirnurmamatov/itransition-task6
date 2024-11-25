import React, { useState } from "react";
import { useUserStore } from "../store/userStore";


const Login = () => {
  const [nickname, setNickname] = useState("");
  const setUser = useUserStore((state) => state.setUser);
  const connectSocket = useUserStore((state) => state.connectSocket);

  const handleLogin = () => {
    if (nickname.trim()) {
      setUser(nickname);
      connectSocket();   
    } else {
      alert("Please enter a nickname.");
    }
  };

  return (
    <div>
      <h1>Enter Your Nickname</h1>
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Nickname"
      />
      <button onClick={handleLogin}>Join</button>
    </div>
  );
};

export default Login;
