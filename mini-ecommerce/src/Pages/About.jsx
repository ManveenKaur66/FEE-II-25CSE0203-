import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <h1>About Mini E-Commerce App</h1>
      <p>
        Mini E-Commerce App is a simple online shopping platform where
        customers can explore products and manage their carts
        easily.
      </p>

      <p>Our goal is to make online shopping simple and convenient.</p>

      <Link to="/">Back to Home</Link>
    </section>
  );
}

export default About;
