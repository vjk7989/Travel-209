import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Form from './components/Form';
import SampleLoc from './components/SampleLoc';
import Sort from './components/Sort';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Teams from './components/Teams';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/form" element={<Form />} />
          <Route path="/main" element={<Main />} />
          <Route path="/sample-loc" element={<SampleLoc />} />
          <Route path="/sort" element={<Sort />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>

        {/* Render Footer outside the Routes component */}
         <Form />
        <Stats />
       
        <SampleLoc />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
