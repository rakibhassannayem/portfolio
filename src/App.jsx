import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:id" element={<ProjectDetailsPage />} />
    </Routes>
  );
};

export default App;
