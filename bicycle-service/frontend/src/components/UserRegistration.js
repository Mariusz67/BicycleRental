import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:8081/customers', { firstName, lastName, email, phone, password })
      .then(() => alert('User registered successfully!'))
      .catch((error) => {
          if (error.response && error.response.status === 409) {
              alert('Error: Email is already in use');
          } else {
              console.error('Error registering user:', error);
          }
      });
  };

  return (
    <div className="card">
      <h2>User Registration</h2>
      <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register User</button>
    </div>
  );
};

export default UserRegistration;
