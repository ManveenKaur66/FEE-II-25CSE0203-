import { Link } from "react-router";

function Navbar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Product">Product</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Login">Login</Link>
            </nav>
        </>
    );
}

export default Navbar;