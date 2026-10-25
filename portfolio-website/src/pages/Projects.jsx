import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectList = [
    {
      title: "Shopping Cart",
      description:
        "An e-commerce interface for viewing products and managing a shopping cart.",
      technologies: ["React", "CSS", "JavaScript"],
    },
    {
      title: "CampusHub AI",
      description:
        "A college ecosystem designed to bring useful campus features into one platform.",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "Portfolio Website",
      description:
        "A personal website showcasing my profile, skills, projects and contact details.",
      technologies: ["React Router", "CSS"],
    },
  ];

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">WHAT I'VE BUILT</p>
        <h1>My Projects</h1>
        <p>Here are some projects that demonstrate my learning.</p>
      </div>

      <div className="project-grid">
        {projectList.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
