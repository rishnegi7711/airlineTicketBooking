
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DateDestination from './components/DateDestination';
import SeatSelection from './components/SeatSelection';
import ConfirmBooking from './components/ConfirmBooking';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="/date-destination" element={<DateDestination/>} />
          <Route path="/seat-selection" element={<SeatSelection/>} />
          <Route path="/confirm-booking" element={<ConfirmBooking/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
