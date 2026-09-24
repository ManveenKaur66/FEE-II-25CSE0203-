import useApi from "../hooks/useApi";

function Products() {
    const {data,loading,error} = useApi('https://dummyjson.com/products');

    if(loading) {
        return(
            <h1>Loading....</h1>
        )
    }

    if(error) {
        return(
            <h1>{error}</h1>
        )
    }

    return(
        <>
        <h1>PRODUCT COMPONENT </h1>
        <ol>
            {data.products.map((product)=>{
                return(<li>{product.title}</li>)
            })}
        </ol>
        </>
    )
}

export default Products;