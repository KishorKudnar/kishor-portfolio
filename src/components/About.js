import "./About.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";

const About = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="about">

      {/* Mouse Glow */}
      <div
        className="mouse-light"
        style={{
          left: mousePos.x + "px",
          top: mousePos.y + "px"
        }}
      />

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About <span>Me</span>
      </motion.h2>

      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        glareEnable={true}
        glareMaxOpacity={0.15}
        scale={1.02}
        className="about-tilt"
      >
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p>
            I am a passionate <strong>Java Full Stack Developer</strong> with strong expertise in 
            building secure and scalable web applications using 
            Spring Boot, Spring Security, JWT authentication, Hibernate,
            RESTful APIs, React.js,HTML,CSS,JavaScript and SQL.
          </p>

          <p>
            I enjoy solving real-world problems, optimizing performance,
            and creating clean and maintainable code using modern development practices.
          </p>

          <div className="about-stats">
            <div>
              <h3>6+</h3>
              <span>Projects</span>
            </div>
            <div>
              <h3>1+</h3>
              <span>Years Experience</span>
            </div>
            <div>
              <h3>10+</h3>
              <span>Technologies</span>
            </div>
          </div>

        </motion.div>
      </Tilt>

    </section>
  );
};

export default About;
