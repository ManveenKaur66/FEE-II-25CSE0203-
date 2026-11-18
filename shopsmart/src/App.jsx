import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");

  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=0")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      })
      .catch(error => console.log(error));
  }, []);

  function handleSearch() {
    setSearch(searchInput);
  }

  let result = products.filter(product => {

    const matchSearch = product.title.toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "all" || product.category === category;

    return matchSearch && matchCategory;
  });

  if (sort === "low") {
    result = [...result].sort((a, b) => a.price - b.price);
  }

  else if (sort === "high") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  else if (sort === "ratingLow") {
    result = [...result].sort((a, b) => a.rating - b.rating);
  }

  else if (sort === "ratingHigh") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  function addToCart(product) {

    const existing = cart.find(item => item.id === product.id);

    if (existing) {

      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));

    } else {

      setCart([...cart, { ...product, quantity: 1 }]);

    }
  }

  function increaseQuantity(id) {

    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));

  }

  function decreaseQuantity(id) {

    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));

  }

  function removeProduct(id) {

    setCart(cart.filter(item => item.id !== id));

  }

  const totalAmount = cart.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <>

      <h1>SHOPSMART: A SMART SHOPPING PLATFORM</h1>
      <h2>PRODUCT DETAILS</h2>
      <input type="text" placeholder="Search your product" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
      <button onClick={handleSearch}>Search</button>
      <button onClick={() => {setSearchInput(""); setSearch("");}}>Clear Search</button>
      <br /><br />

      <select value={category} onChange={e => setCategory(e.target.value)}>

        <option value="all">All Categories</option>
        {[...new Set(products.map(p => p.category))].map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}

      </select>

      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="">Default Sorting</option>
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
        <option value="ratingLow">Rating: Low to High</option>
        <option value="ratingHigh">Rating: High to Low</option>
      </select>

      <hr />
      <h2>AVAILABLE PRODUCTS</h2>
      {result.length === 0 && <p>No products found.</p>}
      {result.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button onClick={() => setSelectedProduct(product)}>View Details</button>
          <hr />
        </div>

      ))}

      {selectedProduct && (
        <div>
          <h2>COMPLETE PRODUCT INFORMATION</h2>
          <h3>{selectedProduct.title}</h3>
          <p>Description: {selectedProduct.description}</p>
          <p>Brand: {selectedProduct.brand}</p>
          <p>Price: dollar {selectedProduct.price}</p>
          <p>Category: {selectedProduct.category}</p>
          <p>Rating: {selectedProduct.rating}</p>
          <button onClick={() => setSelectedProduct(null)}>Close Details</button>
        </div>

      )}

      <hr />
      <h2>MY CART</h2>
      <h3>
        Total Cart Items: {
          cart.reduce((total, item) => total + item.quantity, 0)
        }
      </h3>
      {cart.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: dollar {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <button onClick={() => increaseQuantity(product.id)}>+</button>
          <button onClick={() => decreaseQuantity(product.id)}>-</button>
          <button onClick={() => removeProduct(product.id)}>Remove</button>
          <p>Subtotal: dollar {product.price * product.quantity}</p>
          <hr />
        </div>
      ))}
      <h2>Total Amount: dollar {totalAmount.toFixed(2)}</h2>
    </>
  );
}

export default App;
