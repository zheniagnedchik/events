import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainEvents from './components/MainEvents';

function App() {
  return (
    <Router>
      <MainEvents />
    </Router>
  );
}

export default App;
