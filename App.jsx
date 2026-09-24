import { BrowserRouter, Routes, Route } from "react-router"; // Fixed import
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Product from "./Product";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Getname from "./Getname";
import DisplayName from "./DisplayName";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        
        {/* Wildcard route should be placed last */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;