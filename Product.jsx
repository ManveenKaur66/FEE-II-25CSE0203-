import { useState, useEffect } from "react";
import { Link } from "react-router";
function Product() {
    
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(res => res.json())
            .then(data => setProducts(data.products));
    }, []);
    // Requires callback function and dependency array.
    return (
        <>
            <h1>Product Component</h1>
                {/*RENDERING IN THE FORM OF LIST  */}
            <ul>
                {products.map((product) => {
                    return (
                        <div key={product.id}>     {/*USED FOR OPTIMIZATION */}
                            <li>{product.title}</li>
                             <Link to={`/products/${product.id}`}>   {/*THIS IS DYNAMIC ROUTE */}
                                <button>View Product</button>
                            </Link>
                        </div>
                    );
                })}
            </ul>
        </>
    );
}

export default Product;