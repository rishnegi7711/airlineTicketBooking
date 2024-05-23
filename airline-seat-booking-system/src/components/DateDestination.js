
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateDestination.css';

const DateDestination = () => {
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/seat-selection');
  };

  return (
    <div className="date-destination-container">
      <h1>Select Date and Destination</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Destination:</label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default DateDestination;
