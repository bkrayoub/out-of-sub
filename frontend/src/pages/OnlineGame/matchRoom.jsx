import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import { FirebaseService } from '../../services/firebaseService';
import { useStateContext } from '../../contexts/ContextProvider';
import '../../style/matchRoom.css';

import vote from '../../image/vote.png'
import image from '../../image/default.png'




export default function MatchRoom() {
    const params = useParams();
    const code = params.code;
    const firebase = new FirebaseService();

    const [players, setPlayers] = useState([]);
    const { user, token, setToken, setUser } = useStateContext();
    const [room, setRoom] = useState({});


    useEffect(() => {
        const addPlayer = async () => {
            if (user.id) {
                const res = await firebase.addPlayer(code, user);
                if (res === "success") {
                    const getPlayers = await firebase.getPlayers(code, setPlayers);
                    console.log(getPlayers);
                }
                else {
                    alert("awili")
                }
            }
        }
        addPlayer();
    }, []);


    useEffect(() => {
        for (let i = 1; i <= players.length; i++) {
            if (!user.id === players.id[i]) {
                console.log('You are not allowd')
            }
        }
    }, [])
    console.log(players);
    /* */

    useEffect(() => {
        const gettingRoom = async () => {
            console.log("code is ", code);
            const getRoom = await firebase.getRoom(code);
            console.log("room is", getRoom);
            setRoom(getRoom);
        }
        gettingRoom();
    }, []);
    //////////////////////////////////////////
    /* select sebjects from xampp database */

    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        fetchSubcategies();
    }, []);

    const fetchSubcategies = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getSubjects/' + room.category);
            setSubCategories(response.data);
            console.log(response.data);// All subjects
        } catch (error) {
            console.error(subCategories);
        }
    };
    /////////////////////////////////////////

    return (
        <>
            <div className="onlineGameContainer">


                <div className="gameboard">
                    <div className="ask">
                        <p>
                            <span>username </span>
                            <span id='asking' style={{ "color": "#a829bd;", "margin": "0px 20px;" }}>Asking</span>
                            <span> player</span>
                        </p>
                        <input 
                            type="text" 
                            placeholder="Ask something"
                        />
                        <div className="answer">
                            <span id='yesBtn'>Yes</span>
                            <span id='noBtn'>No</span>
                            <span id='skipBtn'>Skip</span>
                        </div>
                    </div>
                    <img id="vote" src={vote} />
                </div>
                <div className="players">
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                    <div>
                        <div>
                            <img src={image} />
                        </div>
                        <p>player name</p>
                    </div>
                </div>
            </div>
        </>
    )
}