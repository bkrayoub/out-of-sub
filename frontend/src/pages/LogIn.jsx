import React from 'react'
import '../style/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function LogIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });
        // Handle the response, e.g., redirect to a dashboard page
        } catch (error) {
        console.error('Error:', error);
        }
    }


  return (
        <div className="container">

            <form onSubmit={handleSubmit}>
                <h1>Connect your account</h1>
                <div className='loginForm'>
                    <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <p>You don’t have an account?<span><Link to="/signUp">create one</Link></span></p>
                <div className="botona">
                    <button type='submit'></button>
                </div>               
            </form>
        </div>
    )
}
