import React, { useState } from 'react';
import '../style/home.css';
import logoImage from '../image/logo.png'
import boras from '../image/easteregg.jpg'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Splashcreen(props) {
    const [easteregg, setEasteregg] = useState(0);

    const handleClick = () => {
        setEasteregg(easteregg + 1);
        console.log(easteregg);
    }
    return (
        <>
            <div className="container1">
                <div className="rotateBg"></div>
                {easteregg === 20 ? <img src={boras} /> : <img src={logoImage} onClick={() => handleClick()} />}
                <div className="botona1">
                    <Link id="login" to="/login" className='btnHover'></Link>
                    <Link id="guest" to="/guest_lobby" className='btnHover'></Link>
                </div>
            </div>
        </>
    );
}

export default Splashcreen;