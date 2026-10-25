import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Go to Home</Link>
    </section>
  );
}

export default NotFound;
