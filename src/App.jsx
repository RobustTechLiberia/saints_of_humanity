import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/home";
import AboutPage from "./Pages/about";
import BlogPage from "./Pages/blog";
import FaqPage from "./Pages/faq";
import Job from "./Pages/job";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/job" element={<Job />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
