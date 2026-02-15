import "./Skills.css";
import { useRef } from "react";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";
import {
  SiSpringboot,
  SiPostgresql,
  SiHibernate,
  SiJavascript,
  SiHtml5,
  SiCss3
} from "react-icons/si";

const Skills = () => {

  const cardRefs = useRef([]);

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 15;
    const rotateY = (x - centerX) / 15;

    card.style.transform =
      `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;

    // Floating layers
    const icons = card.querySelectorAll(".skill-tags span");
    icons.forEach((icon, i) => {
      icon.style.transform = `translateZ(${25 + i * 5}px)`;
    });
  };

  const handleMouseLeave = (card) => {
    card.style.transform =
      "rotateX(0deg) rotateY(0deg) scale(1)";

    const icons = card.querySelectorAll(".skill-tags span");
    icons.forEach(icon => {
      icon.style.transform = "translateZ(0px)";
    });
  };

  const sections = [
    {
      title: "Languages",
      items: [
        <><FaJava /> Java</>,
        <><SiJavascript /> JavaScript</>,
        <><SiPostgresql /> SQL</>
      ]
    },
    {
      title: "Backend",
      items: [
        <><SiSpringboot /> Spring Boot</>,
        <><SiHibernate /> Hibernate</>,
        <>JWT</>,
        <>REST APIs</>
      ]
    },
    {
      title: "Frontend",
      items: [
        <><SiHtml5 /> HTML5</>,
        <><SiCss3 /> CSS3</>,
        <><FaReact /> React.js</>
      ]
    },
    {
      title: "Tools",
      items: [
        <><FaGitAlt /> Git</>,
        <><FaGithub /> GitHub</>,
        <>OOP</>,
        <>Agile</>
      ]
    }
  ];

  return (
    <section className="skills">
      <h2 className="section-title">
        Technical <span>Skills</span>
      </h2>

      <div className="skills-grid">
        {sections.map((section, index) => (
          <div
            key={index}
            className="skill-card"
            ref={(el) => cardRefs.current[index] = el}
            onMouseMove={(e) =>
              handleMouseMove(e, cardRefs.current[index])
            }
            onMouseLeave={() =>
              handleMouseLeave(cardRefs.current[index])
            }
          >
            <h3>{section.title}</h3>
            <div className="skill-tags">
              {section.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
