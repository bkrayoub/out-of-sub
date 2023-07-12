import React, { useEffect, useState } from 'react';
import '../style/host.css';
import addImage from '../image/add.png';
import startImage from '../image/start.png';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import { FirebaseService } from '../services/firebaseService';
import { useStateContext } from '../contexts/ContextProvider';

function Host() {

    /*-------------------------- Generate room code --------------------------*/
    const [room, setRoom] = useState({});

    const { user, token, setToken, setUser } = useStateContext();
    const [userLoaded, setLoaded] = useState(false);
    const [players, setPlayers] = useState([]);
    const [gameStarted, setGameStarted] = useState(false);

    /*-------------------------- show and hide add div --------------------------*/
    const [show, setShow] = useState(false);
    const [numObt, setNumObt] = useState(1);


    /*-------------------------- select all categories to list them --------------------------*/
    const [categories, setCategory] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("");

    const navigate = useNavigate();

    let count = 1;
    const params = useParams();
    const code = params.code;
    const firebase = new FirebaseService();

    useEffect(()=>{
        if(room.started){

            navigate("/game/"+ room.code);
        }
    }, [room])

    useEffect(() => {
        const gettingRoom = async () => {
            console.log("code is ", code);
            const getRoom = await firebase.getRoom(code);
            console.log("rooooom",getRoom);
            setRoom(getRoom);
        }
        gettingRoom();
    }, []);

    useEffect(() => {
        console.log("room is ", room);
    }, [room]);

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
    }, [userLoaded]);

    useEffect(() => {
        if (user.id && !userLoaded) {
            setLoaded(true);
        }
    }, [user]);


    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        console.log(players);
    }, [players])

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getCategories');
            setCategory(response.data);
            setSelectedCategory(response.data.name);
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

    useEffect(()=>{
        console.log(room);
    }, [room])

    const fetchSubcategies = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/getSubjects/' + categories.id);
            setSubCategories(response.data);

            console.log(response.data);
        } catch (error) {
            console.error(subCategories);
        }
    };


    return (
        <div className="container_ho_on">
            <Link to='/lobby' style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px" }}><h1>Back</h1></Link>
            <div className="left">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        {(room && room.ownerID === user.id) ? <th>Operator</th> : ""}
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr>
                                <td className='flex items-center justify-center gap-2'>
                                    <div className={'w-2 h-2 rounded-[50%] '
                                        + (player.state === 'online' ? 'bg-[#0f0]' : 'bg-[#f00]')}
                                    />
                                    <span>{count++}</span>
                                </td>
                                <td>{player.id === user.id ? "You" : player.name}</td>
                                {(room && room.ownerID === user.id) ? <td className='deletePlayer'>delete</td> : ""}

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="right">
                <h1>Room Code: <spane>{code}</spane></h1>
                <div className="hostoperation">
                    <div>
                        <p>category</p>
                        <select name="" id="" onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            console.log(e.target.value);
                        }}>
                            <option value={categories.name} selected>{categories.name}</option>
                            <option value="">more categories are coming soon</option>
                        </select>
                    </div>
                    <div>
                        <p>obtrusives</p>
                        <div className='flex justify-center gap-2'>
                            <button className={"rounded-[5px] px-2 "
                                + (numObt === 1 ? " bg-[#701ACD] " : " bg-[#9157cf] ")}
                                onClick={() => setNumObt(1)}
                            >1</button>
                            <button className={" rounded-[5px] px-2 "
                                + (numObt === 2 ? " bg-[#701ACD] " : " bg-[#9157cf] ")}
                                onClick={() => setNumObt(2)}
                            >2</button>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <img alt='' src={addImage} onClick={() => {
                        setPlayers([]);
                    }} />
                    {room.ownerID === user.id ? <img alt='' src={startImage} className="button" onClick={() => {
                        firebase.updateRoom(room.code, {started: true})
                        setRoom((old)=>{
                            return {...old, started: true}
                        })
                    }} /> : ''}
                </div>
            </div>
        </div>
    );
}

export default Host;