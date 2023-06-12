import React from 'react';
import '../style/signup.css';

export default function SignUp() {
  return (
    <>
      <div class="container_su">
        <form action=''>
          <h3>username</h3>
            <input type="text"/>
            
            <h3>email</h3>
            <input type="text"/>

            <h3>password</h3>
            <input type="text"/>

            <h3>conferm password</h3>
            <input type="text"/>
        </form>



        <div class="right">
            <h1>create your account and play with friends</h1>

            <div class="botona">
                <a href="./pages/lobby.html">
                </a>
            </div>
        </div>
      </div>
    </>
  )
}
