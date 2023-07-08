import '../../style/join.css';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import switchOn from '../../image/switch-on.png'
import switchOff from '../../image/switch-off.png'
import { FirebaseService } from '../../services/firebaseService';
import { useStateContext } from '../../contexts/ContextProvider';





export default function Join() {
    const [code, setCode] = useState()
    const [passCode, setPassCode] = useState()
    const [showPassInp, setShowPassInp] = useState(true);
    const { user, token, setToken, setUser } = useStateContext();

    const firebase = new FirebaseService();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await firebase.getRoom(code);
        if (res) {
            window.location.href = "/online-game/" + code;
        }
        else {
            alert("awili")
        }
    }

    return (
        <div className="join_container">
            <Link to='/lobby' style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px" }}><h1>Back</h1></Link>

            <form className='joinForm' onSubmit={handleSubmit}>
                <h1>Join Room</h1>
                <div className='joinForm'>
                    <div className='flex w-full'>
                        <input
                            className='w-full'
                            type="text"
                            onChange={(e) => setCode(e.target.value)}
                            value={code}
                            placeholder='Room code'
                        />
                    </div>
                    <div className='flex w-full'>
                        <input
                            className='w-[calc(100%)]'
                            type="password"
                            onChange={(e) => setPassCode(e.target.value)}
                            value={passCode}
                            placeholder='Room Password'
                            disabled={!showPassInp}
                        />

                        <img
                            src={showPassInp ? switchOn : switchOff}
                            className='w-[100px]'
                            onClick={() => showPassInp ? setShowPassInp(false) : setShowPassInp(true)}
                        />
                    </div>

                </div>
                <div className="botona">
                    <button type='submit'></button>
                </div>
            </form>
        </div>
    )
}