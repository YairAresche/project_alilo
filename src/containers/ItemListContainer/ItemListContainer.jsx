import { gFetch } from '../../components/helpers/gFetch';
import CardProducts from '../../components/Products/Products'
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { Container, Spinner } from 'react-bootstrap';

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        gFetch() // simulacion de fetch para consultar una api
            .then(responseResolve => setProducts(responseResolve))
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) })
    }, [])

    return (
        <Container >
            <h3 className='text-center'>Productos</h3>
            <br />

                <div className='containerProducts'>
                    { loading ? <Spinner /> :
                    products.map( product => <CardProducts item={product} nombre={product.nombre} descripcion={product.description} img={product.img} key={product.id}/> )}
                </div>
            
        </Container>
    )
}

export default ItemListContainer