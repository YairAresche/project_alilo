
const ItemList = ( { products } ) => {
    return (
        products.map( product => <Product product={product} /> )
    )
}

export default ItemList