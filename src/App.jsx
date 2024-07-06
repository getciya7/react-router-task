// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import AllCourses from "./pages/AllCourses";
import FullStack from "./pages/FullStack";
import DataScience from "./pages/DataScience";
import CyberSecurity from "./pages/CyberSecurity";
import Career from "./pages/Career";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
