function Display({ product }) {
    return (
        <>
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
            <p>Rating: {product.rating}</p>

            <img
                src={product.thumbnail}
                alt={product.title}
                width="200"
            />
        </>
    );
}

export default Display;