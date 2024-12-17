import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';

const TransactionRegistration = () => {
  const location = useLocation(); // Access navigation state for bicycleId
  const navigate = useNavigate();

  // Prepopulate bicycleId from navigation state
  const bicycleId = location.state?.bicycleId || "";
  const [transactionData, setTransactionData] = useState({
    ifBorrowed: "yes", // Default value
    timestamp: new Date().toISOString(), // Current timestamp in ISO format
    locationCode: "", // To be entered by user
    customerId: "", // To be fetched from authentication or session
    bicycleId: bicycleId, // Automatically filled in
  });

  useEffect(() => {
    // Retrieve userID from localStorage
    const userID = localStorage.getItem("userID");

    // Update transactionData with userID if it exists
    if (userID) {
      setTransactionData((prevData) => ({
        ...prevData,
        customerId: userID,
      }));
    }
  }, []);  

  

  function handleInputChange(e) {
        const { name, value } = e.target;
        setTransactionData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const formattedData = {
        ifBorrowed: transactionData.ifBorrowed,
        timestamp: transactionData.timestamp,
        locationCode: transactionData.locationCode,
        customer: {
          customerID: transactionData.customerId, // Nest customerId
        },
        bicycle: {
          bicycleID: transactionData.bicycleId, // Nest bicycleId
        },
      };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ifBorrowed: transactionData.ifBorrowed,
            timestamp: transactionData.timestamp,
            locationCode: transactionData.locationCode,
            customer: {
              customerID: transactionData.customerId, // Nest customerId
            },
            bicycle: {
              bicycleID: transactionData.bicycleId, // Nest bicycleId
            },
          };

        try {
          const response = await axios.post("http://localhost:8081/transactions", formattedData);
          alert("Transaction successfully registered!");
          console.log(response.data);
        } catch (error) {
          console.error("Failed to register transaction:", error);
          alert("Error registering transaction. Please try again.");
        }
    };

  console.log(location.state);



  return (
    <div style={{ margin: "20px auto", maxWidth: "400px" }}>
      <h2>Transaction Registration</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Bicycle ID</label>
          <input
            type="text"
            name="bicycleId"
            value={transactionData.bicycleId}
            readOnly
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Customer ID</label>
          <input
            type="text"
            name="customerId"
            value={transactionData.customerId}
            readOnly
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Borrow Status</label>
          <select
            name="ifBorrowed"
            value={transactionData.ifBorrowed}
            onChange={handleInputChange}
            style={{ display: "block", width: "100%" }}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Timestamp</label>
          <input
            type="text"
            name="timestamp"
            value={transactionData.timestamp}
            readOnly
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label>Location Code</label>
          <input
            type="text"
            name="locationCode"
            value={transactionData.locationCode}
            onChange={handleInputChange}
            placeholder="Enter location code"
            style={{ display: "block", width: "100%" }}
          />
        </div>
        <button type="submit" style={{ width: "100%" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionRegistration;

