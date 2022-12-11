import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { gFetch } from "../../components/helpers/gFetch"
import ItemDetail from "../../components/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const {productoId} = useParams()
    console.log(productoId)

    // useEffect => getFetch(productoId) => que trae un obj
    // para luego enviarlo al componente ItemDetail
    useEffect( ()=>{
        gFetch(productoId)
    } )

    return (
        <>
            <ItemDetail
                // product={product}
            />
        </>
    )
}

export default ItemDetailContainer