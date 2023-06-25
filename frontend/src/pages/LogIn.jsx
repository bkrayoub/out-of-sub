import React, {useState } from 'react'
import '../style/login.css';
import { Link } from 'react-router-dom';
// import axiosClient from '../axios-client';
import axios from 'axios';


import { useStateContext } from '../contexts/ContextProvider';


export default function LogIn() {
    const {setUser, setToken} = useStateContext()
    
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        const payLoad = {
            email: email,
            password: password,
        }
        axios.post('http://127.0.0.1:8000/api/login', payLoad)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token);
        })
        .catch((err) => {
            const response = err.response;
            if (response && response.status === 422) {
                console.log(response.data.message)
            }
      })
        
    }


  return (
        <div className="login_container">
        <Link to='/splashscreen' style={{"position": "absolute" , "color": "white", "left" : "50px", "top" : "30px"}}><h1>Back</h1></Link>

            <form className='loginForm' onSubmit={handleSubmit}>
                <h1>Login into your account</h1>
                <div className='loginForm'>
                    <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                     />
                    <input 
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                     />                     
                </div>
                <p>Not Registered? <span><Link to="/register">Sign Up</Link></span></p>
                <div className="botona">
                    <button type='submit'></button>
                </div>               
            </form>
        </div>
    )
}
