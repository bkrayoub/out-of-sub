import React from 'react'
import '../style/login.css';
import { Link } from 'react-router-dom';
export default function LogIn() {

  return (
        <div class="container">
            <h1>Connect your account</h1>
            <form action="">
                <input type="text" />
                <input type="password" />
            </form>
            <p>You don’t have an account?<span><Link to="signUp">create one</Link></span></p>
            <div class="botona">
                <a href="./pages/lobby.html"></a>
            </div>
        </div>
    )
}
