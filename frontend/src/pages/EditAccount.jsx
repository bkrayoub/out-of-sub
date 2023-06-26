import React, { useState } from 'react';
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import '../style/editProfile.css';


export default function EditAcc() {
    
    const {user,token} = useStateContext()
    const [name, setName] = useState(user.name);
    const [newEmail, setNewEmail] = useState();
    const [newPass, setNewPass] = useState('');

    console.log('hi ' + user.name)



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/update/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, newEmail, newPass }),
        });
        // Handle the response, e.g., show success message
      } catch (error) {
        console.error('Error:', error);
      }
    };



    

    return (
        <>
    <div className="container">
        <form className="main">
            <div className="left">
                <h3>username</h3> 
                <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                
                <h3>email</h3>
                <input type="email" 
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                />
    
                <h3>password</h3>
                <input 
                type="text"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                />
    
                <div className="botona">
                    <button type='submit' id='submit'>
                    </button>
                </div>
            </div>
    
            <div className="right">
                <div id="pfpInput">
                    <input type="file" name="" id="pfp"/>
                </div>
    
                <div className="botona">
                    <button id="delete">
                    </button>
                </div>
            </div>
        </form>
    </div>
        </>
    )
}