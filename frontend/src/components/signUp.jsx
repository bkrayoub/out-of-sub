import React, { useState } from 'react';
import '../style/signup.css';

export default function SignUp() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    console.log(data);
  };


  return (
    <>
      <div className="container_su">
        <form onSubmit={handleSubmit}>
          <h3>username</h3>
            <input 
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            />
            
            <h3>email</h3>
            <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <h3>password</h3>
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <h3>conferm password</h3>
            <input 
            type="password"
            />
            <button type='submit'>click</button> 

        </form>



        <div className="right">
            <h1>create your account and play with friends</h1>

            <div className="botona">
                <button type='submit'></button> 
            </div>
        </div>
      </div>
    </>
  )
}
