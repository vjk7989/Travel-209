// Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export const DefaultLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
  
  export const SortLayout = ({ children }) => {
    return (
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    );
  };
