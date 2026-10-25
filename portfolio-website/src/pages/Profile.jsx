function Profile() {
  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h1>My Profile</h1>
        <p>Some information about me and my education.</p>
      </div>

      <div className="profile-card">
        <div className="profile-avatar">M</div>

        <h2>Manveen</h2>
        <p className="muted">Computer Science Student</p>

        <div className="profile-details">
          <p><strong>Email:</strong> your.email@example.com</p>
          <p><strong>Course:</strong> B.E. Computer Science</p>
          <p><strong>University:</strong> Your University</p>
          <p><strong>Skills:</strong> HTML, CSS, JavaScript, React</p>
          <p><strong>Interests:</strong> Web Development, Coding</p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
