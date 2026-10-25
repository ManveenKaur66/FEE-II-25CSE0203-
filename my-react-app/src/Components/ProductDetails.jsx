import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";
//useContext is a built-in React function that creates a context object used to share data globally 
// across a component tree.It solves the problem of prop drilling
function ProductDetails() {
    const{id,title}=useContext(ProductContext);
    //const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));

    }, [id]);
    return (
        <>
            <h1>Product Details</h1>
            <h2>Product Id: {id}</h2>
            <h2>Title: {product.title}</h2>
            <h2>Description: {product.description}</h2>
            <h2>Price: {product.price}</h2>

            <ProductContext.Provider value={{}}>

            </ProductContext.Provider>
        </>
    );
}

export default ProductDetails;