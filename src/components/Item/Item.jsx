import React from 'react'

const Item = () => {
    return (
        <>
            <CardProducts key={product.id} item={product} id={product.id} categoria={product.categoria} name={product.name} precio={product.precio} img={product.img} >
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

            </CardProducts>
        </>
    )
}

export default Item