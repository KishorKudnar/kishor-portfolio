import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate first load delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // ⏳ Change duration if you want

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* ===== FULL SCREEN LOADER ===== */}
      {loading && <Loader />}

      {/* ===== MAIN WEBSITE ===== */}
      {!loading && (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
