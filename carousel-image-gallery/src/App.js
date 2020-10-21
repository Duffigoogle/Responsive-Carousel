import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from './components/Carouselcomp';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComp />
    </div>
  );
}

export default App;
