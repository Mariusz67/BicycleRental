// src/components/BicycleList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../bicycle-list.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';


const BicycleList = () => {
  const [bicycles, setBicycles] = useState([]); // State to store bicycles data
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    // Fetch data from backend API
    axios.get('http://localhost:8081/bicycles')
      .then((response) => {
        setBicycles(response.data); // Update bicycles state with fetched data
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((err) => {
        setError('Failed to fetch bicycles.'); // Handle any error during fetch
        setLoading(false);
      });
  }, []); // Empty dependency array ensures the fetch happens once when the component mounts

  if (loading) {
    return <p>Loading bicycles...</p>; // Show loading message while fetching data
  }

  if (error) {
    return <p>{error}</p>; // Show error message if there is an issue
  }

  const handleRegisterBicycle = () => {
    navigate('/register-bicycle'); // Navigate to the registration route
  };

  const handleBicycleClick = (bicycleID) => {
    navigate("/transaction-registration", { state: { bicycleId: bicycleID } });
 // Navigate to the Transaction Registration page 
  };

  return (
    <div className="bicycle-list-container">
      <h2>Pick your Bicycle</h2>
      <ul className="bicycle-list">
        {bicycles.length > 0 ? (
          bicycles.map((bicycle) => (
            <li key={bicycle.bicycleID} className="bicycle-item" style={{ cursor: 'pointer' }} onClick={() => handleBicycleClick(bicycle.bicycleID)} >
              <p><strong>Bicycle Type</strong> {bicycle.bicycleType}</p>
              <p><strong>Short Description:</strong> {bicycle.bicycleShortDescription}</p>
              <p><strong>Long Description:</strong> {bicycle.bicycleLongDescription}</p>
              <p><strong>Status:</strong> {bicycle.bicycleStatus}</p>
            </li>
          ))
        ) : (
          <p>No bicycles available.</p>
        )}
      </ul>
      
      <button onClick={handleRegisterBicycle} className="register-button">
        Register New Bicycle
      </button>
      
    </div>
  );
};

export default BicycleList;
