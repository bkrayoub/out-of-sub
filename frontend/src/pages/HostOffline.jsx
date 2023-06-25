import React, { useEffect, useState } from 'react';
import '../style/hostOffline.css';
import addImage from '../image/add.png';
import startImage from '../image/start.png';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


export default function HostOffline() {
    
    const [addOpacity, setAddOpacity] = useState('none');


    const removeOpacity = () => {
        setAddOpacity('none')
        setAddPlayer('') 
    }
    const addPlayerInretface = () => {
        setAddOpacity('flex')
    }

    const [player, setAddPlayer] = useState('');
    const [players, setPlayers] = useState([]);
    const [error, setError] = useState('');


    ////////////////////////////////////////////////////////

    const handleAddition = async (e) => {
        e.preventDefault();
        try{
                console.log('hehe')
                const response = await fetch('http://127.0.0.1:8000/api/addOfflinePlayer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ player }),
                });
                if (!response.ok) {
                    throw new Error('Error creating user');
                }
                else {
                    alert("Player added successfully!");
                    setAddPlayer('') 
                    window.location.reload()
                }     
            }
        catch (error) {
            if (error.response && error.response.status === 422) {
                setError('Player limit exceeded');
              } else {
                console.error(error);
                alert('Player limit exceeded')
                // Handle other error scenarios
              }
        }

      };
    ////////////////////////////////////////////////////////




    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/offlinePlayers')
        .then(response => {
          setPlayers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
console.log(players.name)
///////////////////////////////
const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/removePlayer/${id}`);
      setPlayers(players.filter((player) => player.id !== id));
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };
///////////////////////////////
  return (
    <div className="container_ho">
        <Link to='/guest_lobby' style={{"position": "absolute" , "color": "white", "left" : "50px", "top" : "30px"}}><h1>Back</h1></Link>
        <div className='addPlayerBackground'   style={{"display" : addOpacity}}>
            <button id='close' onClick={removeOpacity}>Close</button>
            <form onSubmit={handleAddition} className='addPlayerContainer' id='addPlayer'>
                <input 
                type='text' 
                value={player} 
                onChange={(e) => setAddPlayer(e.target.value)}
                />
                <button></button>
            </form>
        </div>
        <div className="left">
            <table>
                <thead>
                    <th>#</th>
                    <th>Name</th>
                    <th>Operator</th>
                </thead>
                <tbody>
            {players.map((player, index)=> (
                <tr>
                    <td>{index + 1}</td>
                    <td>{player.player}</td>
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
                <img alt='' src={addImage} onClick={addPlayerInretface} />
                <img alt='' src={startImage} className="button" />
            </div>
        </div>
    </div>
  )
}
