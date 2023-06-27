import React, { useEffect, useState } from 'react';
import '../style/hostOffline.css';
import addImage from '../image/add.png';
import startImage from '../image/start.png';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function HostOffline() {
    /*-------------------------- show and hide add div --------------------------*/
    const [show, setShow] = useState(false);

    
    /*-------------------------- select all categories to list them --------------------------*/
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getCategories');
            setCategory(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(categories);
        }
    };
    /*-------------------------- select all subjects of selected category  --------------------------*/
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        fetchSubcategies();
    }, []);
    const fetchSubcategies = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getSubjects/'+categories.id+'');
            setSubCategories(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(subCategories);
        }
    };


    /*-------------------------- store players from local storage --------------------------*/
    const [player, setAddPlayer] = useState('');
    let currentPlayers = JSON.parse(localStorage.getItem("localPlayers"));
    if(!currentPlayers){
        currentPlayers = [];
    }
    const [players, setPlayers] = useState(currentPlayers);
    if (!localStorage.getItem("currentID")) {
        localStorage.setItem("currentID", 1)
    }
    const currentID = JSON.parse(localStorage.getItem("currentID"));
    const [playersID, setPlayersID] = useState(currentID);


    /*-------------------------- add player to local storage --------------------------*/
    const handleAddition = async (e) => {
        e.preventDefault();
        setPlayers((old) => {
            const newPlayer = { "name": player, "id": playersID };
            return [...old, newPlayer];
        });
        setPlayersID(playersID + 1);
    };
    useEffect(() => {
        const localPlayers = localStorage.getItem("localPlayers");
        if (localPlayers) {
            const json = JSON.parse(localPlayers);
            setPlayers(json);
        }
    }, []);


    /*-------------------------- check if local storage returns somthing --------------------------*/
    useEffect(() => {
        const PlayersJson = JSON.stringify(players);
        localStorage.setItem("localPlayers", PlayersJson);
        if (players.length <= 0) {
            setPlayersID(1);
        }
    }, [players]);


    /*-------------------------- set id to next player --------------------------*/
    useEffect(() => {
        localStorage.setItem("currentID", playersID);
    }, [playersID]);


    /*-------------------------- delete player from local storage --------------------------*/
    const handleDelete = async (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

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
                            <option value="">{categories.name}</option>
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
