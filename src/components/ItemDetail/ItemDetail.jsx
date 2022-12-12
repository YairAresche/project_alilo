import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ( {product} ) => { // intercambiabilidad

    const onAdd = (cantidad) => console.log(cantidad);

    return (
        <div className="row">
            <div className="col m-5">
                <h2>{product.name}</h2>
                <h4>Categoría: {product.categoria}</h4>
                <img className="w-50 rounded" src={product.img} alt={product.name} />
                <h4 className="mt-2">Precio: {product.precio}</h4>
            </div>
            <div className="col">
                <ItemCount stock={10} initial={1} onAdd={onAdd} />
            </div>
        </div>
    )
}

export default ItemDetail