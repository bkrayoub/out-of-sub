import '../style/join.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import switchOn from '../image/switch-on.png'
import switchOff from '../image/switch-off.png'





export default function Join() {
    const [code, setCode] = useState()
    const [passCode, setPassCode] = useState()
    const [showPassInp, setShowPassInp] = useState(true)






    return (
    <div className="join_container">
        <Link to='/lobby' style={{"position": "absolute" , "color": "white", "left" : "50px", "top" : "30px"}}><h1>Back</h1></Link>

            <form className='joinForm'>
                <h1>Join Room</h1>
                <div className='joinForm'>
                    <input
                    type="text"
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                    placeholder='Room code'
                     />
                     {showPassInp ? 
                        <input  
                        type="password"
                        onChange={(e) => setPassCode(e.target.value)}
                        value={passCode}
                        placeholder='Room Password'
                        />
                    :
                        <input  
                        disabled
                        type="password"
                        onChange={(e) => setPassCode(e.target.value)}
                        value={passCode}
                        placeholder='Room Password'
                        />  
                     }
                        <img 
                        src={showPassInp? switchOn:switchOff} 
                        className='switch'
                        onClick={()=> showPassInp? setShowPassInp(false):setShowPassInp(true)}
                            /> 
                    
                </div>
                <div className="botona">
                    <button type='submit'></button>
                </div>               
            </form>
        </div>
        )
}