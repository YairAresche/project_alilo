import './products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CardProducts({id, name, categoria, stock, precio, img}) {
    // console.log(props)
    return (
        <Card key={id} className='cardProducts'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{categoria}</Card.Title>
                <Card.Text>
                    {name}
                </Card.Text>
                <Card.Text>
                    {precio}
                </Card.Text>
                <Link to={`/detail/${id}`}> <Button>Detalle del producto </Button> </Link>
            </Card.Body>
        </Card>
    );
}

export default CardProducts;