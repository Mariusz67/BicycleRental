import React, { useState } from 'react';
import axios from 'axios';

const BicycleRegistration = () => {
  const [bicycleShortDescription, setBicycleShortDescription] = useState('');
  const [bicycleLongDescription, setBicycleLongDescription] = useState('');
  const [bicycleStatus, setBicycleStatus] = useState('');
  const [bicycleType, setBicycleType] = useState('');

  const handleRegister = () => {
    axios.post('http://localhost:8081/bicycles', {bicycleShortDescription , bicycleLongDescription, bicycleStatus, bicycleType })
      .then(() => alert('Bicycle registered successfully!'))
      .catch((error) => console.error('Error registering bicycle:', error));
  };

  return (
    <div className="card">
      <h2>Bicycle Registration</h2>
      <input type="text" placeholder="Short Description" value={bicycleShortDescription} onChange={(e) => setBicycleShortDescription(e.target.value)} />
      <input type="text" placeholder="Long Description" value={bicycleLongDescription} onChange={(e) => setBicycleLongDescription(e.target.value)} />
      <input type="text" placeholder="Type" value={bicycleType} onChange={(e) => setBicycleType(e.target.value)} />
      <input type="text" placeholder="Status" value={bicycleStatus} onChange={(e) => setBicycleStatus(e.target.value)} />
      <button onClick={handleRegister}>Register Bicycle</button>
    </div>
  );
};

export default BicycleRegistration;
