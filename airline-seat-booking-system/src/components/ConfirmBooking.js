
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmBooking.css';

const ConfirmBooking = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate.push('/');
  };

  return (
    <div className="confirm-booking-container">
      <h1>Booking Confirmed!</h1>
      <p>Your seat has been successfully booked. Thank you for choosing our airline.</p>
      <button className="back-home-button" onClick={handleBackToHome}>
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmBooking;
