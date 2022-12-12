import { useState } from "react"
import '../ItemCount/ItemCount.css'

export const ItemCount = ( {stock = 5, initial=1, onAdd} ) => {
    const [contador, setearContador] = useState(initial)

    const increase = () => { if(contador < stock) setearContador(contador + 1) }
    const decrease = () => { if(contador > initial) setearContador(contador - 1) }

    const handleOnadd = ()=> onAdd(contador);

    return (
        <div className="itemCount">
            <div className="mb-3">
                <button className="btn btn-outline-primary" onClick={increase}>+</button>
                <label className="ms-1 me-1" htmlFor="">{contador}</label>
                <button className="btn btn-outline-primary" onClick={decrease}>-</button>
            </div>
            <button className="btn btn-outline-primary" onClick={ handleOnadd }>agregar al carrito</button>
        </div>
    )
}
export default ItemCount;