import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";

import Projects from "./pages/Projects";
import CreateSlide from "./pages/CreateSlide";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Main Layout for HomePage and Login */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/create-slide" element={<CreateSlide />} />
      </Routes>
    </div>
  );
};

export default App;
