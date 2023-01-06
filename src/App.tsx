import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <header>
            <h1>Sonar client for MANTA</h1>
        </header>
        <ul>
            <li><Link to="/report">Reports</Link></li>
            <li><Link to="/qualty-gates">Quality gates</Link></li>
        </ul>
    </div>
  );
}

export default App;
