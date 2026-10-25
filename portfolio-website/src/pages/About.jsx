function About() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h1>About Me</h1>
        <p>My journey, interests and future goals.</p>
      </div>

      <div className="about-card">
        <h2>Who Am I?</h2>

        <p>
          I am a Computer Science student who enjoys exploring
          programming and modern web technologies. I like
          solving problems and turning ideas into working
          applications.
        </p>

        <p>
          My current focus is on strengthening my skills in
          JavaScript, React, data structures and web development.
          I believe that consistent practice and curiosity are
          important for becoming a good developer.
        </p>

        <h2>My Skills</h2>

        <div className="skills-grid">
          <div className="skill-item">HTML</div>
          <div className="skill-item">CSS</div>
          <div className="skill-item">JavaScript</div>
          <div className="skill-item">React</div>
          <div className="skill-item">Java</div>
          <div className="skill-item">SQL</div>
        </div>

        <h2>My Goal</h2>

        <p>
          My goal is to become a skilled software developer,
          contribute to meaningful projects and continue
          learning new technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
