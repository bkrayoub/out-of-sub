import { useEffect, useState } from 'react';
import { FirebaseService } from '../services/firebaseService';
import { Link, Navigate, useNavigate } from 'react-router-dom';

const firebase = new FirebaseService();

export default function Find() {

    const navigate = useNavigate();

    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const gettingRooms = async () => {
            const getRoom = await firebase.getRooms(setRooms);
            // setRooms(getRoom);
            console.log(getRoom);
        }
        gettingRooms();
        console.log("kayjib ", rooms);
    }, []);

    useEffect(() => {
        console.log("rooms are : ", rooms);
    }, [rooms])


    return (
        <>
            <button onClick={() => { navigate(-1) }}>Back</button>
            <table>
                <thead>
                    <th>#</th>
                    <th>Room code</th>
                    <th>Category</th>
                    <th>Operator</th>
                </thead>
                {rooms.map((room, index) => {
                    return <tr>
                        <td>{index + 1}</td>
                        <td>{room.code}</td>
                        <td>baaaaarcaaaa</td>
                        <td>
                            <Link to={"/room/" + room.code}>Join</Link>
                        </td>
                    </tr>
                })}
            </table>
        </>
    )
}