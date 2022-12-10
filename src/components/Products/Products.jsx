import './products.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardProducts({nombre, descripcion, img}) {
    // console.log(props)
    return (
        <Card className='cardProducts'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <Button>Detalle del producto </Button>
            </Card.Body>
        </Card>
    );
}

export default CardProducts;