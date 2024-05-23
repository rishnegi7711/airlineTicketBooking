
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import DateDestination from './components/DateDestination';
import SeatSelection from './components/SeatSelection';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact component={LoginForm} />
          <Route path="/date-destination" component={DateDestination} />
          <Route path="/seat-selection" component={SeatSelection} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
