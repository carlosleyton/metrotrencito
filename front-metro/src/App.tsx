import { StationList } from './components/station-list';
import { Navbar } from './components/navbar';
import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <StationList />
      </header>
    </div>
  );
}

export default App;
