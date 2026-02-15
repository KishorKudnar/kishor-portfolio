import "./Hero.css";
import profile from "../assets/profile.png";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const roles = [
  "Java Full Stack Developer",
  "Spring Boot Expert",
  "React Developer",
  "Backend Developer"
];

const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      setText(roles[index].slice(0, current + 1));
      current++;

      if (current === roles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1000);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [index]);

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY
    });
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove}>

      {/* Mouse Glow */}
      <div
        className="mouse-light"
        style={{
          left: mousePos.x + "px",
          top: mousePos.y + "px"
        }}
      />

      {/* Glass Card */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={2000}
      >
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          {/* 🔥 SOCIAL ICONS */}
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/kishor-kudnar-36459425b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/KishorKudnar" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/kishor.dkudnar/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>

          <h1>
            Hi, I'm <span>Kishor Kudnar</span>
          </h1>

          <h3 className="hero-role">
            {text}<span className="cursor">|</span>
          </h3>

          <p>
            Experienced in building secure and scalable web applications using
            Core Java, Spring Boot, Spring Security, JWT, Hibernate,
            RESTful APIs, React.js, and PostgreSQL.
          </p>

          <div className="hero-buttons">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">
              ⬇ View Resume
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kishorkudnar2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              ✉ Contact Me
            </a>

          </div>

        </motion.div>
      </Tilt>

      {/* Floating Image */}
      <motion.div
        className="hero-right"
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        <div className="image-wrapper">
          <img src={profile} alt="Kishor Kudnar" />
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
