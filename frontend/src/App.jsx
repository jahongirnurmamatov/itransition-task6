import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SlidesLayout from "./layout/SlidesLayout";
import SlideProjects from "./pages/slides/SlideProjects";
import SlideProject from "./pages/slides/SlideProject";

const App = () => {
  return (
    <div className="">
      <Routes>
        {/* Main Layout for HomePage and Login */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Slides Layout for slide-related pages */}
        <Route element={<SlidesLayout />}>
          <Route path="/slide/projects" element={<SlideProjects />} />
          <Route path="/slide/projects/:projectId" element={<SlideProject />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
