import React from 'react';
import Header from './header/Header.js';
import Movies from './movie/Movies.js';
import Footer from './footer/Footer.js';
import ErrorBoundary from './errorBoundary/ErrorBoundary.js';
import '../styles/App.css';

let App = () => (
    <>
      <Header />
      <ErrorBoundary>
        <Movies />
      </ErrorBoundary>
      <Footer />
    </>
);
  
export default App;