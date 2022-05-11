import React from 'react';
import { CounterA } from './components/CounterA';
import { CounterB } from './components/CounterB';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-orange-200">
        <div style={{height: 250, width: 250}} className="shadow-lg border-2 border-orange-400 rounded-full">
        <img style={{height: "100%", width:"100%"}} src="https://i.ibb.co/yyv9frT/fruit.png" className="App-logo" alt="logo" />

        </div>
        <div className='flex w-full justify-around'>
        <CounterA />
        <CounterB />

        </div>
      </header>
    </div>
  );
}

export default App;
