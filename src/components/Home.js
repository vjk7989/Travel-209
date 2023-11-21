import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Form from './Form';
import SampleLoc from './SampleLoc';
import Sort from './Sort';
import Stats from './Stats';
import Footer from './Footer';
import QuickView from './QuickView';
import Teams from './Teams';
import Service from './Service';


function Home() {
    return (
   <div>
    <Navbar/>
    <HeroSection/>
    <Form/>
    <SampleLoc/>
    <Stats />
    <Footer />
   </div>
    );
  }
  
  export default Home;
  
