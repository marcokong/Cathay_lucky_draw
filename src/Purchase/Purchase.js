import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import './Purchase.css'

const Purchase = () => {
    let navigate = useNavigate();
    let cats = ["Electronics", "Home", "Travel", "Fashion", "Sports"]

    const goDraw = () => {
        navigate("/luckydraw")
    }

    const purchase = (cat) => {
        localStorage.setItem(cat, parseInt(localStorage.getItem(cat || 0)) + 1);
        console.log(localStorage);

    }

    const catPurchase = cats.map((cat) =>
        <Col>
            <h1>{cat}</h1>
            <Button onClick={() => purchase(cat)}>Purchase $1000</Button>
        </Col>
    );
    return (

        <Container fluid="md">

            <Row className="align-items-center">
                {catPurchase}
            </Row>
            <Button className="row" onClick={goDraw}>Have a lucky draw</Button>
        </Container>

    )
}

export default Purchase;