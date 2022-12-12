import { useState } from "react"


export const ItemCount = ( {stock = 5, initial=1, onAdd} ) => {
    const [contador, setearContador] = useState(initial)
    const [booleano, setBooleano] = useState(true)

    const sumar = () => {
        if(contador < stock){
            setearContador(contador + 1)
        }
    }

    const restar = () => { if(contador > initial) setearContador(contador - 1) }

    const handleOnadd = ()=> onAdd(contador);

    return (
        <center className="mt-5 border border-1 border-primary p-3 rounded">
            <button
                className="btn btn-outline-primary"
                onClick={sumar}
            >
                +
            </button>
            <label htmlFor="">{contador}</label>

            <button
                className="btn btn-outline-primary"
                onClick={restar}
            >
                -
            </button>
            <br />
            <button
                className="btn btn-outline-primary"
                onClick={ handleOnadd }
            >
                agregar al carrito
            </button>
            <br></br>
            {/* <button 
            className="btn btn-outline-primary" 
            onClick={hanldeBool} 
        > 
            Ejecutar Booleano
        </button>      */}
        </center>
    )
}
export default ItemCount;