import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import {increaseQuantity,decreaseQuantity,removeFromCart,clearCart} from "../features/cart/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,0);

  if (items.length === 0) {
    return (
      <section>
        <h1>Your Cart</h1>
        <p>Your cart is empty. Start shopping!</p>
        <Link to="/products">Browse Products</Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />
          <div className="cart-details">
            <h3>{item.name}</h3>
            <p>₹{item.price} each</p>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}> - </button>
            <span className="quantity">{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}> + </button>
            <p>Subtotal: ₹{item.price * item.quantity}</p>
            <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}

      <h2>Total: {total}</h2>
      <button className="secondary" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      <button onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
    </section>
  );
}

export default Cart;
