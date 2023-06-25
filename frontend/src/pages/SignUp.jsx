import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/signup.css';

export default function SignUp() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confermPass, setconfermPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(confermPass === password){
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      const data = await response.json();
  
      // console.log(data.message);
      if (data.message === "User registered successfully"){ 
        alert("Welcome "+name+" you successfully have registered!");
        setName('')
        setEmail('')
        setPassword('')
        setconfermPass('')
        window.location.href = '/login';
      }
    }
    else{
      alert("passwords don't match");
    }
  };


  return (
    <>
      <div className="container_su">
      <Link to='/login' style={{"position": "absolute" , "color": "white", "left" : "50px", "top" : "30px"}}><h1>Back</h1></Link>

      <form onSubmit={handleSubmit} className="signupForm">

<div className='left' >
          <h3>username</h3>
            <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            
            <h3>email</h3>
            <input 
            type="email"
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
            value={confermPass}
            onChange={(e) => setconfermPass(e.target.value)}
            />

        </div>



        <div className="right">
            <h1>create your account and play with friends</h1>

            <div className="botona">
                <button type='submit' ></button> 
            </div>
        </div>



      </form>

        
      </div>
    </>
  )
}
