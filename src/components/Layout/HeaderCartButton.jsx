import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Badge from 'react-bootstrap/Badge';
import CartContext from '../../scripts/Context';
import ItemsTable from '../Cart/ItemsList';



function ShowModalButton({ handleShow }) {
    const CartItems = useContext(CartContext);
    return (
        <Button variant="primary" className='h-75' onClick={handleShow}>
            Your cart <Badge bg="secondary">{CartItems.items.length}</Badge>
            <span className="visually-hidden"></span>
        </Button>
    );
}

function HeaderCartButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ShowModalButton handleShow={handleShow} />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ItemsTable />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Order</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default HeaderCartButton;