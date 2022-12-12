import { gFetch } from '../../components/helpers/gFetch';
import CardProducts from '../../components/Product/Product'
import { useState, useEffect } from 'react';
import './ItemListContainer.css'
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoriaId} = useParams()

    useEffect(() => {
        if (categoriaId) {
            gFetch() // simulacion de fetch para consultar una api
                .then(response => setProducts(response.filter( product => product.categoria === categoriaId))) // cambio de estado
                .catch(err => console.log(err))
                .finally(() => setLoading(false) )
        } else {
            gFetch() // simulacion de fetch para consultar una api
                .then(response => setProducts(response)) // cambio de estado
                .catch(err => console.log(err))
                .finally(() => setLoading(false) )
        }
    }, [categoriaId])

    console.log(categoriaId)

    return (
        <Container >
            <h3 className='text-center'>Productos</h3>
            <br />

                <div className='containerProducts'>
                    { loading ? <Spinner /> :
                    products.map( product => 
                    <CardProducts key={product.id} item={product} id={product.id} categoria={product.categoria} name={product.name} precio={product.precio} img={product.img}  />) }
                </div>
            
        </Container>
    )
}

export default ItemListContainer