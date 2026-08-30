// import ProductCard from "./ProductCard";
// import "./App.css";
// import Card from"./Card";

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Racing Team Cap",
//       category: "Cap",
//       description:
//         "Premium racing-inspired cap with a sporty design for motorsport fans.",
//       price: 2499,
//       stock: 8,
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQJkgbe3UBxyrqMi9dtJi8eWtt90dEUsV7g65-oHHQWzf-gpGhzjZhTzfKfgCZzhNXl11b8alj0Y0RHfktYod6yQwLQeKtSaxfz9qTOFurJgyk6kNRjYkV-R2b3",
//     },
//     {
//       id: 2,
//       name: "F1 Racing T-Shirt",
//       category: "T-Shirt",
//       description:
//         "Comfortable racing-inspired T-shirt designed for everyday motorsport fans.",
//       price: 3999,
//       stock: 6,
//       image:
//         "https://www.thedribblestore.com/cdn/shop/files/red-bull-racing-team-polo-2025-front-view-red-bull.png?v=1762972551&width=1291",
//     },
//     {
//       id: 3,
//       name: "Racing Team Hoodie",
//       category: "Hoodie",
//       description:
//         "Premium hoodie with a bold racing-inspired design and comfortable fit.",
//       price: 5999,
//       stock: 5,
//       image:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQweqPhUWVfbWpFd8jKpLo78kk5aSiimyaLC2lPaNQwmxMP14l2SrKRBrYbiYJmucVYCAdyj4x_B-KsI2gu0p8r9wsHBQR7XaephyI7ER_UYZBrlb5fjyICWA",
//     },
//     {
//       id: 4,
//       name: "Motorsport Jacket",
//       category: "Jacket",
//       description:
//         "Stylish racing jacket inspired by the world of high-speed motorsport.",
//       price: 7499,
//       stock: 4,
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTNq8VF29OjJdLGEaFuuiB9mYb-qzanX6ex1pLaRFoCPUrt68fg3t3KSvUmjpDAMNIj9xdFKngfpquSYHpGiitx3gVXkmS3PZmc2c9eApcbe9pGpk8Ns2ULAvk",
//     },
//     {
//       id: 5,
//       name: "F1 Die-Cast Car",
//       category: "Collectible",
//       description:
//         "Detailed miniature racing car made for collectors and motorsport enthusiasts.",
//       price: 4999,
//       stock: 3,
//       image:
//         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR3eC5aFisHt1VzG7WzH-EwwgIDsGc7PJW0rKxoFsE8Ql4t2XdLcSfmKy3ZVk_3iJiyTjspB4weiWJQBvDQugG-Oc8WdpSFpk8KJSeZh4E2Z4kP8CP_yxFj9g",
//     },
//     {
//       id: 6,
//       name: "Racing Backpack",
//       category: "Accessories",
//       description:
//         "Spacious and stylish backpack designed for everyday use by racing fans.",
//       price: 3499,
//       stock: 7,
//       image:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRbnvVCzT8mwi2hN4IrWsNo4n28ZFsZTIyGLmZMqm1fmPnVb-UWb1IOetnaAmUDrL0IyV1XmQpsPkMy0XyfUc0At8SrdM00Q2hXriEMXBZh3RLsl35kU4WnSpoB",
//     },
//     {
//       id: 7,
//       name: "Racing Team Mug",
//       category: "Lifestyle",
//       description:
//         "Classic racing-inspired mug perfect for your desk or home collection.",
//       price: 999,
//       stock: 12,
//       image:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLdSFDrBrfOPOGeEoQRKhTxw1BWtT94S3UQUNF7_CLScNQOxIRRM4rnh3PBzuRMozE_3GJ8jlaly-fBRQESBCgxM6-Wq74",
//     },
//     {
//       id: 8,
//       name: "Motorsport Sunglasses",
//       category: "Accessories",
//       description:
//         "Sporty sunglasses featuring a sleek design inspired by racing culture.",
//       price: 2999,
//       stock: 9,
//       image:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRZzm_54j9VWdlnM-_W9wiHBUUQnTI1ZT7z3P_shjVDnyXufMGwzdlVAnAPwFxfxTGEZTn2Ofru5CPf5NSet99Vnt1mvAjb_7iJxLhI1qGAt_XcIgUhj1Kx",
//     },
//     {
//       id: 9,
//       name: "Racing Gloves",
//       category: "Gear",
//       description:
//         "Racing-inspired gloves designed with a sporty and performance-focused look.",
//       price: 1999,
//       stock: 6,
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSh1GX4Lf4uI7n15e_5ZIX_QZa-ZZRaGmRrA31-zI6GJsc5jZdaZC9aMpOdJpAklrC6E-mKwFrFfsbkyk7F9B99UCZzcHxrGQ",
//     },
//     {
//       id: 10,
//       name: "Racing Poster",
//       category: "Decor",
//       description:
//         "High-quality motorsport poster perfect for decorating your room or workspace.",
//       price: 799,
//       stock: 15,
//       image:
//         "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8KHkFBHM6AYiqps9xjJkZ2y-_BKrlruh2wOEyhCfpkOeVTQBwhropTntp1h5lPT59HJjpBdN4dX5r3_TAmC_ub0NqvEG6ScTxEzS6b-fn6vuIiXxzO-xN",
//     },
//     {
//       id: 11,
//       name: "Racing Keychain",
//       category: "Accessories",
//       description:
//         "Compact racing-inspired keychain for fans who want motorsport everywhere.",
//       price: 499,
//       stock: 20,
//       image:
//         "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQpfbHw_pkIaNCSEx4H_RbTo5Mr7nJWH9ph6_KGSgRY8XPw2oQdIuID9qfDyGo2CjGSM257OJO1P-rnoYUk6EJcZeKK4H-LR_DhTvp8AM4K6kR_rmHOpyGF",
//     },
//     {
//       id: 12,
//       name: "Racing Polo Shirt",
//       category: "Polo",
//       description:
//         "Smart racing-inspired polo shirt combining comfort with a sporty look.",
//       price: 4499,
//       stock: 5,
//       image:
//         "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS8OfwsLFLAAjfah2JmDrIMSPW6szWuhCHLLXx8D03IwaFWV-KU_TlpiAqXlh0-P6U_UXb41lM7pYRzYBIzPNRaXoYiPbdDXJn9DxPW6GJcIzr_ST0zcip-Uw",
//     },
//   ];

//   return (
//     <div className="app">

//       {/* NAVBAR */}

//       <header className="navbar">
//         <div className="logo">
//           Apex<span>Racing</span>
//         </div>

//         <div className="nav-links">
//           <a href="#home">Home</a>
//           <a href="#collection">Collection</a>
//           <a href="#about">About</a>
//         </div>

//         <div className="cart">
//           🛒 <span>Cart</span>
//         </div>
//       </header>


//       {/* HERO SECTION */}

//       <section className="hero" id="home">

//         <div className="hero-content">

//           <p className="small-title">
//             THE RACE STARTS HERE
//           </p>

//           <h1>
//             Feel the speed.
//             <br />
//             Wear the passion.
//           </h1>

//           <p className="hero-text">
//             Explore our collection of racing-inspired apparel,
//             accessories and collectibles made for motorsport fans.
//           </p>

//           <a href="#collection" className="shop-button">
//             Shop Collection
//           </a>

//         </div>

//         <div className="hero-decoration">
//           <span>01</span>
//           <div></div>
//           <span>12</span>
//         </div>

//       </section>


//       {/* PRODUCTS */}

//       <main className="products-section" id="collection">

//         <div className="section-heading">

//           <div>
//             <p className="small-title">
//               APEX COLLECTION
//             </p>

//             <h2>
//               Featured Merchandise
//             </h2>
//           </div>

//           <p className="product-count">
//             {products.length} Products
//           </p>

//         </div>


//         <div className="product-grid">

//           {products.map((product) => (

//             <ProductCard
//               key={product.id}
//               name={product.name}
//               category={product.category}
//               description={product.description}
//               price={product.price}
//               stock={product.stock}
//               image={product.image}
//             />

//           ))}

//         </div>
//       </main>
//       {/* FOOTER */}
//       <footer>
//         <p>
//           © 2026 Apex Racing 
//         </p>
//       </footer>

//     </div>
//   );
// }

// export default App;

// import ProductCard from "./ProductCard";
// import "./App.css";
// import Card from"./Card";

// function App(){
// return(
//   <>
//   <Card>
//   <h1>Inside component</h1>
//   <p>This is called child props</p>
//   </Card>
//   <h1> Count:{count}</h1>
//   <button onClick={handleClick}>Click Here</button>
//   </>
// )
// }

import Display from './Display.jsx';
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([]);
    const [randomProduct, setRandomProduct] = useState(null);

    useEffect(() => {
        fetch('https://dummyjson.com/products?limit=30')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);

                // Select random product
                const randomIndex = Math.floor(
                    Math.random() * data.products.length
                );

                setRandomProduct(data.products[randomIndex]);
            });
    }, []);

    return (
        <>
            <h1>Random Product</h1>
            {randomProduct && (
                <Display product={randomProduct} />
            )}

            <button
                onClick={() => {
                    const randomIndex = Math.floor(
                        Math.random() * products.length
                    );                    
                    setRandomProduct(products[randomIndex]);
                }}
            >
                Random Product
            </button>
        </>
    );
}

export default App;