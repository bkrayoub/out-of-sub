import React, { useEffect, useState } from 'react';
import '../style/hostOffline.css';
import addImage from '../image/add.png';
import startImage from '../image/start.png';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function HostOffline() {

    const [addOpacity, setAddOpacity] = useState('none');
    const [show, setShow] = useState(false);


    const removeOpacity = () => {
        setAddOpacity('none')
        setAddPlayer('')
    }
    const addPlayerInretface = () => {
        setAddOpacity('flex')
    }

    const [player, setAddPlayer] = useState('');
    const currentPlayers = JSON.parse(localStorage.getItem("localPlayers"));
    const [players, setPlayers] = useState(currentPlayers);
    if (!localStorage.getItem("currentID")) {
        localStorage.setItem("currentID", 1)
    }
    const currentID = JSON.parse(localStorage.getItem("currentID"));
    const [playersID, setPlayersID] = useState(currentID);


    ////////////////////////////////////////////////////////

    const handleAddition = async (e) => {
        e.preventDefault();
        setPlayers((old) => {
            const newPlayer = { "name": player, "id": playersID };
            return [...old, newPlayer];
        });
        setPlayersID(playersID + 1);
    };
    ////////////////////////////////////////////////////////




    useEffect(() => {
        const localPlayers = localStorage.getItem("localPlayers");
        if (localPlayers) {
            const json = JSON.parse(localPlayers);
            setPlayers(json);
        }
    }, []);

    useEffect(() => {
        const PlayersJson = JSON.stringify(players);
        localStorage.setItem("localPlayers", PlayersJson);
        if (players.length <= 0) {
            setPlayersID(1);
        }
    }, [players]);

    useEffect(() => {
        localStorage.setItem("currentID", playersID);
    }, [playersID]);

    console.log(players.name)
    ///////////////////////////////
    const handleDelete = async (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };
    ///////////////////////////////
    return (
        <div className="container_ho">
            <Link to='/guest_lobby' style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px" }}><h1>Back</h1></Link>
            {show ? <div className='addPlayerBackground' style={{ translate: show ? "0% 0%" : "-100% 0" }}>
                <button id='close' onClick={() => setShow(false)}>Close</button>
                <form onSubmit={handleAddition} className='addPlayerContainer' id='addPlayer'>
                    <input
                        type='text'
                        value={player}
                        onChange={(e) => setAddPlayer(e.target.value)}
                    />
                    <button></button>
                </form>
            </div> : ""}
            <div className="left">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Operator</th>
                    </thead>
                    <tbody>
                        {players.map((player, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{player.name}</td>
                                <td className='deletePlayer' onClick={() => handleDelete(player.id)}>delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="right">
                <div className="hostoperation">
                    <div>
                        <p>category</p>
                        <select name="" id="">
                            <option value="">animals</option>
                            <option value="">more categories are coming soon</option>
                        </select>
                    </div>
                    <div>
                        <p>obtrusives</p>
                        <button>1</button>
                        <button>2</button>
                    </div>
                </div>
                <div className="buttons">
                    <img alt='' src={addImage} onClick={() => setShow(true)} />
                    <img alt='' src={addImage} onClick={() => {
                        setPlayers([]);
                    }} />
                    <img alt='' src={startImage} className="button" />
                </div>
            </div>
        </div>
    )
}
