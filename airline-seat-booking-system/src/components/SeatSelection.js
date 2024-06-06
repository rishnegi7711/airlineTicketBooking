
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SeatSelection.css';

const SeatSelection = () => {
  const rows = 6;
  const columns = 6;
  const initialSeats = Array.from({ length: rows }, () => Array(columns).fill(false));
  const navigate = useNavigate();
  
  const [seats, setSeats] = useState(initialSeats);

  const bookSeat = (row, col) => {
    const newSeats = seats.map((seatRow, r) =>
      seatRow.map((seat, c) => (r === row && c === col ? !seat : seat))
    );
    setSeats(newSeats);
  };

  const handleConfirmBooking = () => {
    alert('Booking confirmed!');
    navigate.push('/confirm-booking'); 
  };

  return (
    <div className="seat-selection-container">
      <h1>Select Your Seat</h1>
      <div className="seats-grid">
        {seats.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map((isBooked, colIndex) => (
              <button
                key={colIndex}
                className={`seat ${isBooked ? 'booked' : 'available'}`}
                onClick={() => bookSeat(rowIndex, colIndex)}
              >
                {String.fromCharCode(65 + rowIndex)}{colIndex + 1}
              </button>
            ))}
          </div>
        ))}
      </div>
      <button className="confirm-booking-button" onClick={handleConfirmBooking}>
        Confirm Booking
      </button>
    </div>
  );
};

export default SeatSelection;
