import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import logo from '../pic.png';
import cathay_logo from '../cathay_logo.svg';
import { useNavigate } from "react-router-dom"
import './Lucky_draw.css';

const LuckyDraw = (props) => {
    //const [prizes, setPrizes] = useState(props.prizes)

    let navigate = useNavigate();

    const [chance, setChance] = useState(localStorage.getItem('chance') || 5);
    /* 
    useEffect(() => {
        const clickHandler = () => {
            setChance(4);
            navigate("/result");
            console.log(chance);
        };
    });

    function usePersistedState(key, defaultValue) {
        const [chance, setChance] = useState(localStorage.getItem('chance') || defaultValue);
        useEffect(() => {
            localStorage.setItem(key, chance);
        }, [key, chance]);
        return [chance, setChance];
    }
    */

    const clickHandler = () => {
        setChance(chance - 1);
        localStorage.setItem('chance', chance - 1)
        navigate("/result");
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
                <div>
                    {chance == 0
                        ? <Button onClick={returnHandler}>Shop more to have lucky draw</Button>
                        : <Button onClick={clickHandler}>Draw</Button>
                    }
                </div>
            </Container>
        </div>
    );
}

export default LuckyDraw;