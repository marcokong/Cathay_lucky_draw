import React from 'react';
import { Card, Button } from 'react-bootstrap';
//import Button from '@mui/material/Button';
import './Lucky_draw_result.css';
import congrats from '../airplane.gif';
import sorry from '../sorry.jpg'
import { useNavigate } from "react-router-dom";
import draw from '../draw'

const LuckyDrawResult = () => {
    let navigate = useNavigate();
    let prize = draw();

    const clickHandler = () => {
        navigate("/");
    };

    return (
        <div className='container'>
            {prize
                ? <div className='congrats-message'>
                    <Card className='congrats-card'>
                        <Card.Img className="congrats-gif" src={congrats} />
                        <Card.Title className="text">
                            Congratulations!
                        </Card.Title>
                        <Card.Body className="text">
                            You have won a {prize}!
                        </Card.Body>
                    </Card>
                    <Button className="result-return" size="lg" onClick={clickHandler}>Shop to get more!</Button>
                </div>
                : <div className='congrats-message'>
                    <Card className='congrats-card'>
                        <Card.Img className="congrats-gif" src={sorry} />
                        <Card.Title className="text">
                            Sorry!
                        </Card.Title>
                        <Card.Body className="text">
                            You did not won a prize! Try again!
                        </Card.Body>
                    </Card>
                    <Button className="result-return" size="lg" onClick={clickHandler}>Have another draw!</Button>
                </div>
            }
        </div>
    )
}

export default LuckyDrawResult;