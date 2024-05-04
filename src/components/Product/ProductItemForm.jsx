import React, { useContext, useState, forwardRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import CartContext from '../../scripts/Context';

const ProductItemForm = forwardRef(({ reference, name, price }, ref) => {
    const CartItems = useContext(CartContext);
    const [quantity, setQuantity] = useState('');

    const addItemHandler = () => {
        console.log(reference, name, price, quantity)
        if (quantity && quantity > 0) {
            if (CartItems.items.some(item => item.reference === reference)) {
                CartItems.dispatch({
                    type: "UPDATE_ITEM",
                    item: {
                        ref: ref.current,
                        quantity: parseInt(quantity)
                    }
                });
                return;
            }
            else {
                CartItems.dispatch({
                    type: "ADD_ITEM",
                    item: {
                        ref: ref.current,
                        reference: reference,
                        name: name,
                        price: price,
                        quantity: parseInt(quantity)
                    }
                });
            }
        }
    }

    return (
        <Form>
            <Form.Label className='text-muted price'>{price}€</Form.Label>
            <Form.Group className="mb-3 d-inline-flex">
                <Form.Control placeholder="Enter Quantity" type='number' min="0" onChange={(e) => setQuantity(e.target.value)} />
                <Button variant="primary" onClick={addItemHandler}>
                    Add
                </Button>
            </Form.Group>
        </Form>
    );
});

export default ProductItemForm;
