import './product.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProduct({id, name, categoria, precio, img}) {
    // console.log(props)
    return (
        <Card key={id} className='cardProducts'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text>{categoria.toUpperCase()}</Card.Text>
                <Card.Title >
                    {name}
                </Card.Title>
                <Card.Text>
                    Precio: ${precio}
                </Card.Text>
                <Link to={`/detail/${id}`}> <Button>Detalle del producto </Button> </Link>
            </Card.Body>
        </Card>
    );
}

export default CardProduct;