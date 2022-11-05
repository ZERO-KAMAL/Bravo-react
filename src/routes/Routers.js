import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Student from "../pages/student/Student";
import Teacher from "../pages/teacher/Teacher";
import Policy from "../pages/policy/Policy";
import Feature from "../pages/feature/Feature";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/student" element={<Student />} />
      <Route path="/teacher" element={<Teacher />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/feature" element={<Feature />} />
    </Routes>
  );
};

export default Routers;
