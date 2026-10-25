
function Cart({ cart, dispatch }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>): (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>

              <div className="cart-buttons">
                <button
                  onClick={() =>
                    dispatch({
                      type: "INCREASE",
                      payload: item.id
                    })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({
                      type: "DECREASE",
                      payload: item.id
                    })
                  }
                >
                  -
                </button>
                <button className="remove" onClick={() =>
                    dispatch({
                      type: "REMOVE_ITEM",
                      payload: item.id
                    })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total Items: {totalItems}</h3>
          <h2>Total Price: ₹{totalPrice}</h2>
          <button className="clear"onClick={()=>dispatch({ type: "CLEAR_CART" })}>Clear Cart</button>
        </>
      )}
    </div>
  );
}

export default Cart;
