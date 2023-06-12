import React from 'react';
import '../style/home.css';
import logoImage from '../image/logo.png'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Splashcreen(props) {

    return (
        <>
            <div className="container1">
                <img src={logoImage}/>
                <div class="botona1">
                    <Link id="login" to="/login"></Link>
                    <Link id="guest" to="/lobby"></Link>
                </div>
            </div>
        </>
    );
}

export default Splashcreen;