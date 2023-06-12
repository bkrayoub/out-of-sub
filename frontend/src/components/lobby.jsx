import React from 'react'
import { useState } from "react";
import '../style/lobby.css';
import logoImage from '../image/logo.png'
import pfp_demo from '../image/pfp-demo.png'
import { Link } from 'react-router-dom';

export default function Lobby() {
    const [centerWidth, setCenterWidth] = useState('0px')
    const [onlineSectionPos, setOnlineSectionPos] = useState('-100%')

    const onlineCards = () => {
        setCenterWidth('700px')
        setOnlineSectionPos('0%')
    }


  return (
    <>
        <div className='containera'>
            <div className="left">
                <img src={logoImage}/>
                <div id='list'>
                    <p href="" style={{"color":"#7DFFA9"}} onClick={onlineCards}>Online</p>
                    <Link to="/hostOffline" style={{"color":"#FF7D7D"}}>Offline</Link>
                    <a href="">Setting</a>
                    <a href="./credit.html">Credit</a>
                    <Link to="/">Exit</Link>
                </div>
            </div>

            <div className='center' style={{ margin: centerWidth }}></div>

            <div className="right">
                <div id="pfp-card">
                    <img src={pfp_demo} />
                    <p>player name</p>
                    <p>level:</p>
                    <div id="level-line">
                        <div id="level-line-fill"></div>
                    </div>
                </div>

                <div className="news">News</div>
            </div>



            <div className="onlineSection" style={{position: 'absolute', top: onlineSectionPos}}>
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
