import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity,0);

  function placeOrder() {
    dispatch(clearCart());
    alert("Order placed successfully!");
    navigate("/");
  }

  if (items.length === 0) {
    return (
      <section>
        <h1>Checkout</h1>
        <p>Your cart is empty.</p>
        <Link to="/products">Continue Shopping</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Checkout</h1>
      <h2>Order Summary</h2>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity} = 
          {item.price * item.quantity}
        </p>
      ))}
      <h2>Total Amount: {total}</h2>
      <button onClick={placeOrder}>Place Order</button>
      <button className="secondary" onClick={() => navigate("/cart")}>Back to Cart</button>
    </section>
  );
}

export default Checkout;
