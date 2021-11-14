import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import flying_plane from '../flying_plane.gif'

const Loading = () => {
    let navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/result");
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <img className="loading" src={flying_plane} />
            <h2 className="text">Drawing out your prize...</h2>
        </div>
    )
}

export default Loading