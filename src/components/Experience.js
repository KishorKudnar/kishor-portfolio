import "./Experience.css";

const Experience = () => {

  const experiences = [
    {
      role: "Java Full Stack Developer Intern",
      company: "Tek Pyramid",
      duration: "January 2026 - Present",
      desc: "Worked on building secure web applications using Spring Boot, React.js, JWT authentication and PostgreSQL."
    },
    {
      role: "Java Full Stack Developer Intern | React & Java( On-site )",
      company: "BitZetta IT Solutions LLP",
      duration: "June 2025 - December 2025",
      desc: "Worked on building secure web applications using Spring Boot, React.js, JWT authentication and PostgreSQL."
    },
    {
      role: "Java full stack Development",
      company: "Cordon Technologies Pvt Ltd",
      duration: "January 2025 - February 2025",
      desc: "Developed responsive UI components using React.js. Implemented RESTful APIs with Spring Boot and integrated PostgreSQL database."
    }
  ];

  return (
    <section className="experience">
      <h2 className="section-title">
        Work <span>Experience</span>
      </h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.duration}</span>
              <p>{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
