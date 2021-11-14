import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import logo from '../pic.png';
import cathay_logo from '../cathay_logo.svg';
import iphone from '../iphone13.jpg'
import headphone from '../headphone.jpg'
import apple_watch from '../apple_watch.jpg'
import { useNavigate } from "react-router-dom"
import './Lucky_draw.css';

const LuckyDraw = (props) => {
    //const [prizes, setPrizes] = useState(props.prizes)

    let navigate = useNavigate();

    const [chance, setChance] = useState(localStorage.getItem('chance') || 5);

    const clickHandler = () => {
        setChance(chance - 1);
        localStorage.setItem('chance', chance - 1)
        navigate("/loading");
    };

    const returnHandler = () => {
        setChance(chance - 1);
        localStorage.setItem('chance', chance - 1)
    }

    useEffect(() => {
        if (chance < 0) {
            setChance(5);
            localStorage.setItem('chance', 5)
        }
    }, [chance]
    );


    const prizeItems = props.prizes.map((prize) =>
        <Card.Text>- {prize}</Card.Text>
    );


    return (
        <div>
            <Container fluid="md">
                <Row>
                    <Col>
                        <img className="cathay_logo" src={cathay_logo} alt="Cathay Pacific" />
                    </Col>
                </Row>
                <Row>
                    <Col className="text">LUCKY DRAW</Col>
                </Row>
                <Row>
                    <Col className="text">Top Prizes:</Col>
                </Row>
                <Row>
                    <Col>
                        <img className="prize-image" src={headphone} alt="headphone" />
                        <h3 className="prize-text">{props.prizes[0]}</h3>
                    </Col>
                    <Col>
                        <img className="prize-image" src={iphone} alt="iphone" />
                        <h3 className="prize-text">{props.prizes[1]}</h3>
                    </Col>
                    <Col>
                        <img className="prize-image" src={apple_watch} alt="apple_watch" />
                        <h3 className="prize-text">{props.prizes[2]}</h3>
                    </Col>
                </Row>
                <Row className="row">
                    <Col className="text">Lottery chances: {chance}</Col>
                </Row>
                <div>
                    {chance == 0
                        ? <Button className="draw-button" onClick={returnHandler}>Retry demo</Button>
                        : <Button className="draw-button" onClick={clickHandler}>Draw</Button>
                    }
                </div>
            </Container>
        </div>
    );
}

export default LuckyDraw;