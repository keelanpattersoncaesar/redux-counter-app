import React from 'react';
import { CounterA } from './components/CounterA';
import { CounterB } from './components/CounterB';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className='flex w-full justify-around'>
        <CounterA />
        <CounterB />
      </div>
      <Routes>
        {/* <Route exact path="/" component={CounterA} /> */}
        {/* <Route path="/" component={} /> */}

      </Routes>
    </Router>
  );
}

export default App;
