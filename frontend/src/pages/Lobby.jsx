import React, { useEffect } from 'react'
import { useState } from "react";
import '../style/lobby.css';
import logoImage from '../image/logo.png'
import pfp_demo from '../image/pfp-demo.png'
import { Link, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider.jsx';
import axios from 'axios';
import { FirebaseService } from '../services/firebaseService';

export default function Lobby() {
    const [centerWidth, setCenterWidth] = useState('0px')
    const [onlineSectionPos, setOnlineSectionPos] = useState('-100%')
    const { user, token, setToken, setUser } = useStateContext();
    const navigate = useNavigate();

    const firebase = new FirebaseService();

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
    const handleHost = async () => {
        let codeLength = 6;
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < codeLength) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        const res = await firebase.initRoom(result, "", user);
        console.log(res);
        if (res === "success") {
            navigate("/room/" + result)
        }
    }
    useEffect(() => {
        console.log("user is :", user);
    })
    return (
        <>
            <div className='container_lobby'>
                <div className="left">
                    <img src={logoImage} />
                    <div id='list'>
                        <p href="" style={{ "color": "#7DFFA9" }} onClick={onlineCardsShow} className="slid-r">Online</p>
                        <Link to="/create_offline_room" style={{ "color": "#FF7D7D" }} className="slid-r">Offline</Link>
                        <a href="" className="slid-r">Setting</a>
                        <Link to="/credit" className="slid-r">Credit</Link>
                        <Link to="#" onClick={onLogout} className="slid-r">Log Out</Link>
                    </div>
                </div>

                <div className='center' style={{ margin: centerWidth }}></div>

                <div className="right">
                    <div id="pfp-card">
                        <img src={"/images/" + user.photo} />
                        <p>{user.name}</p>
                        <p>level:</p>
                        <div id="level-line">
                            <div id="level-line-fill"></div>
                        </div>
                        <Link to="/edit_profile">edit</Link>
                    </div>

                    <div className="news">News</div>
                </div>



                <div onClick={onlineCardsHide} className="onlineSection" style={{ position: 'absolute', top: onlineSectionPos }}>
                    <img src={logoImage} />
                    <div className="cards">
                        <a className='cursor-pointer' onClick={handleHost}>
                            <div>
                                <img src="" />
                            </div>
                            <p>Host</p>
                        </a>

                        <a href="/join">
                            <div>
                                <img src="" />
                            </div>
                            <p>Join</p>
                        </a>

                        <a href="/find">
                            <div>
                                <img src="" />
                            </div>
                            <p>Find</p>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
