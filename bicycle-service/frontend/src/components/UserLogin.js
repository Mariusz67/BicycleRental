/*

import React, { useState } from 'react';
import axios from 'axios';

const UserLogin = () => {
  const [email, setUserEmail] = useState('');
  const [password, setUserPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
   
    const response = await axios.post('http://localhost:8081/customers/loginvalidation', { email, password });

    if (response.status === 200) {
        alert('User logged-in successfully!');
        window.location.href = '/bicycle-list';
    };

  }  

  return (
    <div className="card">
      <h2>User Login</h2>
      <input type="text" placeholder="E-mail" value={email} onChange={(e) => setUserEmail(e.target.value)} />
      <input type="text" placeholder="Password" value={password} onChange={(e) => setUserPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};


export default UserLogin;

*/


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email); // Basic email validation

  const handleLogin = async () => {
    setError(''); // Clear any previous errors

    // Validate email and password
    /* more robust:
    import validator from 'validator';
    console.log(validator.isEmail("test@example.com")); // true
    */
    if (!isValidEmail(userEmail)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!userPassword) {
      setError('Password cannot be empty.');
      return;
    }

    setIsLoading(true); // Show loading state

    try {
      const response = await axios.post('http://localhost:8081/customers/loginvalidation', {
        email: userEmail,
        password: userPassword,
      });

      if (response.status === 200) {
        alert('User logged-in successfully!');

        //NOT SECURE MUST BE REPLACED BEFORE PUTTING ON PRODUCTION
        const userID = response.data.customerID; // Extract customerID from the backend response
        // Store the userID in localStorage for session use
        localStorage.setItem('userID', userID);
        console.log('Login successful! UserID:', userID);
        
        
        //window.location.href = '/bicycle-list';
        navigate('/bicycle-list');
      }
    } catch (error) {
      // Handle backend errors (e.g., invalid credentials)
      if (error.response && error.response.status === 404) {
        setError('Invalid email or password.');
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setIsLoading(false); // Hide loading state
    }
  };

  return (
    <div className="card">
      <h2>User Login</h2>
      <input
        type="text"
        placeholder="E-mail"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} 
    </div>
  );
};

export default UserLogin;


