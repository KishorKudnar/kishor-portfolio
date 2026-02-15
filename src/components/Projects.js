import "./Projects.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {

  const projects = [
    {
      title: "DnyanAI – AI Learning Platform",
      desc: "Designed an AI-powered learning assistant web application for intelligent query handling.",
      tech: ["AI", "React", "Spring Boot","Rest API","Spring Security", "PostgreSQL"],
      github: "https://github.com/KishorKudnar/DnyanAI-backend.git",
      live: "#"
    },
    {
      title: "Smart Health Care System",
      desc: "Full Stack Healthcare Management System with authentication and appointment booking.",
      tech: ["Spring Boot", "React", "PostgreSQL"],
      github: "https://github.com/KishorKudnar/Healthify.git",
      live: "#"
    },
    {
      title: "Mobile Shop E-Commerce",
      desc: "E-commerce web application with cart and order management.",
      tech: ["Java", "Hibernate", "Servlets", "PostgreSQL"],
      github: "https://github.com/KishorKudnar/OnlineMobileShop.git",
      live: "#"
    },
    {
      title: "Employee Management System",
      desc: "A responsive web application for managing employee data and records.",
      tech: ["React", "Spring Boot", "Rest API","Spring Security", "PostgreSQL"],
      github: "https://github.com/KishorKudnar/employee-management-system.git",
      live: "#"
    },

    {
      title: "Student Management System",
      desc: "A responsive web application for managing student data and records.",
      tech: ["React", "Spring Boot", "Rest API","Spring Security", "PostgreSQL"],
      github: "https://github.com/KishorKudnar/-Student_Management_System.git",
      live: "#"
    },
    {
      title: "Real-Time Weather Forecast Web Application",
      desc: "A responsive web application that displays real-time weather forecasts using OpenWeatherMap API.",
      tech: ["React", "OpenWeatherMap API"],
      github: "https://github.com/KishorKudnar/weatherApp.git",
      live: "#"
    }
  ];

  return (
    <section className="projects">
      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-image"></div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="project-tech">
              {project.tech.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> Code
              </a>

              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
