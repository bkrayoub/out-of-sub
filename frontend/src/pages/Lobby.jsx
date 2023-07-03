import React from 'react'
import { useState } from "react";
import '../style/lobby.css';
import logoImage from '../image/logo.png'
import pfp_demo from '../image/pfp-demo.png'
import { Link, Navigate } from 'react-router-dom';
import {useStateContext} from '../contexts/ContextProvider.jsx';
import axios from 'axios';


export default function Lobby() {
    const [centerWidth, setCenterWidth] = useState('0px')
    const [onlineSectionPos, setOnlineSectionPos] = useState('-100%')
    const {user , token , setToken , setUser} = useStateContext()
    
    const onlineCardsShow = () => {
        setCenterWidth('700px')
        setOnlineSectionPos('0%')
    }
    const onlineCardsHide = () => {
        setCenterWidth('0px')
        setOnlineSectionPos('-100%')
    }

    const onLogout = ev => {
        ev.preventDefault()
        axios.post('http://127.0.0.1:8000/api/logout')
        .then((res) => {
            console.log(res);
            setUser({});
            setToken(null);
        })
    }



  return (
    <>
        <div className='containera'>
            <div className="left">
                <img src={logoImage}/>
                <div id='list'>
                    <p href="" style={{"color":"#7DFFA9"}} onClick={onlineCardsShow} className="slid-r">Online</p>
                    <Link to="/create_offline_room" style={{"color":"#FF7D7D"}} className="slid-r">Offline</Link>
                    <a href="" className="slid-r">Setting</a>
                    <Link to="/credit" className="slid-r">Credit</Link>
                    <Link to="#" onClick={onLogout} className="slid-r">Log Out</Link>
                </div>
            </div>

            <div className='center' style={{ margin: centerWidth }}></div>

            <div className="right">
                <div id="pfp-card">
                    <img src={pfp_demo} />
                    <p>{user.name}</p>
                    <p>level:</p>
                    <div id="level-line">
                        <div id="level-line-fill"></div>
                    </div>
                    <Link to="/edit_profile">edit</Link>
                </div>

                <div className="news">News</div>
            </div>



            <div onClick={onlineCardsHide} className="onlineSection" style={{position: 'absolute', top: onlineSectionPos}}>
                <img src={logoImage} />
                <div className="cards">
                    <a href="#">
                        <div>
                            <img src=""/>
                        </div>
                        <p>Host</p>
                    </a>
        
                    <a href="#">
                        <div>
                            <img src=""/>
                        </div>
                        <p>Join</p>
                    </a>
        
                    <a href="#">
                        <div>
                            <img src=""/>
                        </div>
                        <p>Find</p>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}
