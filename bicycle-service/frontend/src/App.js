import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './styles.css';
import UserRegistration from './components/UserRegistration';
import BicycleRegistration from './components/BicycleRegistration';
import TransactionRegistration from './components/TransactionRegistration';
import BicycleList from './components/BicycleList';
import LoginButton from './components/LoginButton';
import UserLogin from './components/UserLogin';

/*
const App = () => {
  return (
    <div className="app">
      <header className="banner-background">
        <h1>Bike Rental Experience</h1>
      </header>
      <main>
        <LoginButton />
        <UserRegistration />
        <BicycleRegistration />
        <BicycleList />
      </main>
    </div>
  );
};
*/

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="banner-background">
          <h1>Bike Rental Experience</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<LoginButton />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/registration" element={<UserRegistration />} />
            <Route path="/register-bicycle" element={<BicycleRegistration />} />
            <Route path="/bicycle-list" element={<BicycleList />} />
            <Route path="/transaction-registration" element={<TransactionRegistration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

