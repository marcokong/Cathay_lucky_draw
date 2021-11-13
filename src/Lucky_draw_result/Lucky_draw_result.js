import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Lucky_draw_result.css';
import congrats from '../airplane.gif';
import { useNavigate } from "react-router-dom";
import draw from '../draw'

const LuckyDrawResult = () => {
    let navigate = useNavigate();
    let prize = draw();

    const clickHandler = () => {
        navigate("/");
    };

    return (
        <div>
            <Card className='congrats-message'>
                <Card.Img className="congrats-gif" src={congrats} />
                <Card.Title>
                    Congratulations!
                </Card.Title>
                <Card.Body>
                    You have won a {prize}
                </Card.Body>
            </Card>
            <Button onClick={clickHandler}>Shop to get more!</Button>
        </div>
    )
}

export default LuckyDrawResult;