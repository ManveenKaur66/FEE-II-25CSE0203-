import ProductCard from "./ProductCard";

function Product() {
    const products = [
        {
            name: "VIVO",
            category: "Mobile",
            stock: 5,
            price: 150000,
            description: "enjfnwjeo"
        },
        {
            name: "IPHONE",
            category: "Mobile",
            stock: 0,
            price: 150000,
            description: "EEJJWEJFEE"
        },
        {
            name: "VIVO",
            category: "Mobile",
            stock: 0,
            price: 150000,
            description: "RNWJNRNNKW"
        }
    ];

    return (
        <>
            <h1>PRODUCTS</h1>
            <div>
            {products.map((product) => {
                return <ProductCard product={product} />;
            })}
            </div>
        </>
    );
}

export default Product;