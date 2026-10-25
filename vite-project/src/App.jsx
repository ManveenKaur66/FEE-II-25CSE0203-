
import { useReducer } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.item];

    case "INCREASE":
      return state.map(item =>
        item.id === action.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    case "DECREASE":
      return state.map(item =>
        item.id === action.id
          ? { ...item, qty: Math.max(0, item.qty - 1) }
          : item
      ).filter(item => item.qty > 0);

    case "REMOVE":
      return state.filter(item => item.id !== action.id);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

export default function App() {
  const [cart, dispatch] = useReducer(reducer, initialState);

  const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Watch", price: 500 }
  ];

  return (
    <div>
      <h1>ShopEasy</h1>

      <h2>Products</h2>

      {products.map(product => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() =>
            dispatch({
              type: "ADD",
              item: { ...product, qty: 1 }
            })
          }>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>My Cart</h2>

      {cart.map(item => (
        <div key={item.id}>
          {item.name} - ₹{item.price} |
          Quantity: {item.qty}

          <button onClick={() =>
            dispatch({ type: "INCREASE", id: item.id })
          }>+</button>

          <button onClick={() =>
            dispatch({ type: "DECREASE", id: item.id })
          }>-</button>

          <button onClick={() =>
            dispatch({ type: "REMOVE", id: item.id })
          }>Remove</button>
        </div>
      ))}

      <h3>
        Total: ₹{cart.reduce(
          (sum, item) => sum + item.price * item.qty, 0
        )}
      </h3>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Cart
      </button>
    </div>
  );
}
