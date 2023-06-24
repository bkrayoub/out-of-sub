import React, { useState } from 'react';
import { useEffect } from 'react';
import '../style/editProfile.css';


export default function EditAcc({itemId}) {
    
    itemId = 2
    const [name, setName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPass, setNewPass] = useState('');
  
    useEffect(() => {
      // Fetch the item data from the server
      fetch(`/api/update/${itemId}`)
        .then(response => response.json())
        .then(data => {
          setName(data.name);
          setNewEmail(data.email);
          setNewPass(data.password);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, [itemId]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`/api/update/${itemId}`, {
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
        <form className="main" onSubmit={handleSubmit}>
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