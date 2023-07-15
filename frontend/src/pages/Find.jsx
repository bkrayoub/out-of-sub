import { useEffect, useState } from 'react';
import { FirebaseService } from '../services/firebaseService';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import '../style/find.css';


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
        console.log("kayjib ", rooms);
    }, []);

    useEffect(() => {
    useEffect(() => {
        console.log("rooms are : ", rooms);
    }, [rooms])
    }, [rooms])


    return (
        <div className='findContainer'>
            <p onClick={()=>navigate(-1)} style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px", "cursor": "pointer" }}><h1>Back</h1></p>
            <table>
                <thead>
                    <th>#</th>
                    <th>Room code</th>
                    <th>Category</th>
                    <th>Operator</th>
                </thead>
                {rooms.map((room, index) => {
                    return <tr onClick={()=>navigate("/room/" + room.code)}>
                        <td>{index + 1}</td>
                        <td>{room.code}</td>
                        <td>baaaaarcaaaa</td>
                        <td>
                            <Link to={"/room/" + room.code}>Join</Link>
                        </td>
                    </tr>
                })}
            </table>
        </div>
    )
}