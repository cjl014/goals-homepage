import React from 'react';
import { InspirationalImage } from './features/inspirationalImage/InspirationalImage.js';
import { Weather } from './features/weather/Weather.js';
import { GoalsForm } from './components/goalsForm/GoalsForm.js';
import { Goals } from './features/goals/Goals.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
      </header>
      <InspirationalImage />
      <main className="App-main">
        <GoalsForm />
        <Goals />
      </main>
    </div>
  );
}

export default App;
