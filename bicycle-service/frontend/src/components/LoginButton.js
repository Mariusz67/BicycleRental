import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function LoginButton() {
    const navigate = useNavigate();
  
    const handleLogin = () => {
      navigate('/login');
    };

    const handleRegistration = () => {
      navigate('/registration');
    };
  
    return (
      <div>
        <h1>Welcome to Bike App, please log in:</h1>
        <button onClick={handleLogin}>Login</button>
        <h2>If you have not yet registered:</h2>
        <button onClick={handleRegistration}>Register</button>
      </div>
    );
  }

export default LoginButton;