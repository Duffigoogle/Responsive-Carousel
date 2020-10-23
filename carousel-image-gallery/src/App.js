import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from './components/Carouselcomp';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComp />
      <Navigation />
      {/* Navigation */}
      {/* Gallery */}
    </div>
  );
}

export default App;
