import React from 'react'
import { useState } from "react";
import '../style/geustlobby.css';
import logoImage from '../image/logo.png'
import { Link, Navigate } from 'react-router-dom';
import {useStateContext} from '../contexts/ContextProvider.jsx'

function Guestlobby(props) {

    const [guestName ,setGuestName] = useState('test-demo'); 
    const { token, user } = useStateContext()
    if (token) {
        return <Navigate to='/lobby'/>
    }


    return (
        <>
            <div className='guest_container'>
            <div className="left">
                <img src={logoImage}/>
                <div id='list'>
                    <p className='unavailable'>Online</p>
                    <Link to="/create_offline_room" style={{"color":"#FF7D7D"}}>Offline</Link>
                    <a href="">Setting</a>
                    <a href="./credit.html">Credit</a>
                    <Link to="/">Exit</Link>
                </div>
            </div>


            <div className="right"> 
                
            <form id="pfp-card">
                <p>click to edit</p>

                <input 
                type="text" 
                value={guestName}
                onChange={(e)=> setGuestName(e.target.value)}
                />

                <br/>
                <Link to="/login">Login</Link>
            </form>

                <div className="news">News</div>
            </div>

        </div>
        </>
    );
}

export default Guestlobby;