function ProjectCard({ title, description, technologies, link }) {
  return (
    <div className="project-card">
      <div className="project-icon">{"</>"}</div>

      <h3>{title}</h3>
      <p>{description}</p>

      <div className="tech-list">
        {technologies.map((tech) => (
          <span className="tech-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="project-link"
      >
        View Project ↗
      </a>
    </div>
  );
}

export default ProjectCard;
