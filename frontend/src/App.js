import Lobby from "./components/lobby";
import Splashcreen from "./components/splashcreen";
import HostOffline from "./components/hostOffline";
import SignUp from "./components/signUp";
import LogIn from "./components/logIn";


import React, { useState } from 'react';
import './style/font-kit.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Splashcreen/>} />
          <Route path="/lobby" element={<Lobby/>} />
          <Route path="/hostOffline" element={<HostOffline/>} />
          <Route path="/logIn" element={<LogIn/>} />
          <Route path="/signUp" element={<SignUp/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
