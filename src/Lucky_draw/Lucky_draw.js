import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import logo from '../pic.png';
import cathay_logo from '../cathay_logo.svg';
import { useNavigate } from "react-router-dom"
import './Lucky_draw.css';

const LuckyDraw = (props) => {
    //const [prizes, setPrizes] = useState(props.prizes)
    let [chance, setChance] = useState(5)

    let navigate = useNavigate();

    const clickHandler = () => {
        setChance(chance - 1);
        navigate("/result");
        console.log(chance);
    }

    const prizeItems = props.prizes.map((prize) =>
        <Card.Text>- {prize}</Card.Text>
    );


    return (
        <div>
            <Container fluid="md">
                <Row></Row>
                <Row></Row>
                <Row>
                    <Col>
                        <img className="cathay_logo" src={cathay_logo} alt="Cathay Pacific" />
                    </Col>
                </Row>
                <Row>
                    <Col>LUCKY DRAW</Col>
                </Row>
                <Card>
                    <Card.Img className="logo" src={logo} />
                    <Card.Title>
                        Prizes include:
                    </Card.Title>
                    <Card.Body>
                        {prizeItems}
                    </Card.Body>
                </Card>
                <Row>
                    <Col>Lottery chances: {chance}</Col>
                </Row>
                <Button onClick={clickHandler}>Draw</Button>
            </Container>
        </div>
    );
}

export default LuckyDraw;