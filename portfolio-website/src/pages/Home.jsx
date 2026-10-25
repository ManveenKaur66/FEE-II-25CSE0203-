import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Manveen</span>
        </h1>

        <h2>Student | Aspiring Software Developer</h2>

        <p className="hero-description">
          I enjoy learning new technologies and building
          creative, useful and user-friendly web applications.
          Explore my portfolio to know more about me.
        </p>

        <div className="hero-buttons">
          <Link to="/projects" className="btn btn-primary">
            View My Projects
          </Link>

          <Link to="/contact" className="btn btn-outline">
            Contact Me
          </Link>
        </div>
      </div>

      <div className="hero-avatar">
        <div className="avatar-circle">YN</div>
        <p>Future Developer 🚀</p>
      </div>
    </section>
  );
}

export default Home;
