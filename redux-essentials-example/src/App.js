import React from 'react';
import Navbar from './components/Navbar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import CounterView from './views/CounterView';
import AboutView from './views/AboutView';
import Contact from './views/Contact';
import Footer from './components/Footer';

function App() {
  return (
    //Router allows you to navigate through different routes
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<CounterView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
