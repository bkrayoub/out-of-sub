import React, { useState } from 'react';
import { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import '../style/editProfile.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function EditAcc() {

  const { user, token, setUser, setToken } = useStateContext();
  const [name, setName] = useState(user.name);
  const [newEmail, setNewEmail] = useState();

  console.log('hi ' + user.name);

  useEffect(() => {
    const getData = async () => {
      const headers = {
        accept: 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN')
      }
      const data = await axios.get("http://127.0.0.1:8000/api/token", {
        headers: headers
      });
      setName(data.data.name);
      setNewEmail(data.data.email);
      console.log(data);
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ "name": name, "email": newEmail }));
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/update/${user.id}`,
        { "name": name, "email": newEmail },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        });
      // Handle the response, e.g., show success message
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleDestroyAcc = async (e) => {
    if (window.confirm("delete yor acawnt for ivar ???")) {
      e.preventDefault();

      const res = await axios.delete("http://127.0.0.1:8000/api/destroy/" + user.id);
      if (res) {
        axios.post('http://127.0.0.1:8000/api/logout')
          .then((res) => {
            console.log(res);
            setUser({});
            setToken(null);
          });
      }



    }
  }




  return (
    <>
      <div >
        <Link to='/lobby' style={{ "position": "absolute", "color": "white", "left": "50px", "top": "30px" }}><h1>Back</h1></Link>
        <form onSubmit={handleSubmit} className="main">
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

            <div className="botona">
              <button type='submit' id='submit'>
              </button>
            </div>
            <div className="botona">
              <button id="delete" onClick={handleDestroyAcc}>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}