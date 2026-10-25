import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <h1>Welcome to Mini E-Commerce App</h1>
      <button onClick={() => navigate("/products")}>Shop Now</button>
      <button className="secondary" onClick={() => navigate("/cart")}>View Cart</button>
    </section>
  );
}

export default Home;
