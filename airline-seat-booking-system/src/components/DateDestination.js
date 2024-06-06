
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DateDestination.css';

const DateDestination = () => {
  const [date, setDate] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const destinations = [
    'New York',
    'Los Angeles',
    'London',
    'Chicago',
    'Houston',
    'Miami',
  ];

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
          <select
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          >
            <option value="" disabled>Select your destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest}>{dest}</option>
            ))}
          </select>
        </div>
        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default DateDestination;
