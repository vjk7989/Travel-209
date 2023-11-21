import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Form from './components/Form';
import SampleLoc from './components/SampleLoc';
import Sort from './components/Sort';
import Stats from './components/Stats';
import Footer from './components/Footer';
import QuickView from './components/QuickView';
import Teams from './components/Teams';
import Home from './components/Home';
import Service from './components/Service';
import Details from './components/Details';


function App() {
  return (
    <Router>
      <div className="app">
    
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/details" element={<Details />} />
          <Route path="/form" element={<Form />} />
          <Route path="/sample-loc" element={<SampleLoc />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
