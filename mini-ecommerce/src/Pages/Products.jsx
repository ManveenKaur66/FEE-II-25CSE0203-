import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import products from "../data/products";

function Products() {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  function handleAdd(product) {
    dispatch(addToCart(product));
    setMessage(product.name + " added to cart!");
  }

  return (
    <section>
      <h1>Our Products</h1>
      {message && <p className="success">{message}</p>}
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleAdd(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
