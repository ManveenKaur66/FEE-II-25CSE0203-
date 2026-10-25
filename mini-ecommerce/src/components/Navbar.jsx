import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <NavLink to="/" className="brand">
        MiniStore
      </NavLink>
      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart ({totalItems})</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
