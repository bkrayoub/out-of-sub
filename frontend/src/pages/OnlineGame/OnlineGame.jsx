import { useEffect, useState } from "react";
import { useStateContext } from "../../contexts/ContextProvider";
import { FirebaseService } from "../../services/firebaseService";
import { v4 as uuidv4 } from 'uuid';

function OnlineGame() {

    const [roomCode, setRoomCode] = useState("");
    const { user, token, setToken, setUser } = useStateContext();
    const roomId = uuidv4();
    const firebase = new FirebaseService(roomId);

    useEffect(() => {

    });

    return (
        <div>
            <input value={roomCode} onChange={(e) => setRoomCode(e.target.value)} />
            <button onClick={() => {
                firebase.addPlayer(roomCode, user);
            }}>join</button>
            <button className="ml-5" onClick={() => firebase.initRoom("okokok", "", user)}>create new</button>
        </div>
    )
}

export default OnlineGame;