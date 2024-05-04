import React from 'react';
import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';

const ProductItem = React.forwardRef(({ reference, name, price }, ref) => {
    return (
        <Card>
            <Card.Img variant="top" src="https://source.unsplash.com/800x480" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ProductItemForm ref={ref} reference={reference} name={name} price={price} />
            </Card.Footer>
        </Card>
    );
});

export default ProductItem;
