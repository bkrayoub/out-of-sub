import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { FirebaseService } from "../../services/firebaseService";
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import './game.css';

function OnlineGame() {

    const [roomCode, setRoomCode] = useState("");
    const { user, token, setToken, setUser } = useStateContext();
    const [userLoaded, setLoaded] = useState(false);
    const [players, setPlayers] = useState([]);
    let count = 1;
    const params = useParams();
    const code = params.code
    const roomId = uuidv4();
    const firebase = new FirebaseService();

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

    return (
        <div className="online-game">
            <div>
                Room Code{code}
            </div>
            <div className="left">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Operator</th>
                    </thead>
                    <tbody>
                        {players.map((player) => (
                            <tr>
                                <td>{count++}</td>
                                <td>{player.id === user.id ? "You" : player.name}</td>
                                <td className='deletePlayer'>delete</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    // return (
    //     <div>
    //         <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} />
    //         <button onClick={() => {
    //             firebase.addPlayer(roomCode, user);
    //         }}>join</button>
    //         <button className="ml-5" onClick={() => firebase.initRoom("okokok", "", user)}>create new</button>
    //     </div>
    // )
}

export default OnlineGame;