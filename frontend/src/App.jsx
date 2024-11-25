import React from "react";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div className="">
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<Login />} path="/login" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
