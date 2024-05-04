import React, { useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

function Products() {
    const productRefs = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null)
    };

    return (
        <Row xs={1} md={2} className="g-4" id='products-list'>
            <Col>
                <ProductItem ref={productRefs[1]} reference={1234} name={"Playstation"} price={399} />
            </Col>
            <Col>
                <ProductItem ref={productRefs[2]} reference={12345} name={"IPhone"} price={899} />
            </Col>
            <Col>
                <ProductItem ref={productRefs[3]} reference={123456} name={"Trotinette"} price={3030} />
            </Col>
            <Col>
                <ProductItem ref={productRefs[4]} reference={1234567} name={"Waifu"} price={5000000} />
            </Col>
        </Row>
    );
}

export default Products;
