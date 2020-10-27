import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from './components/Carouselcomp';
import Header from './components/Header';
import Navigation from './components/Navigation';
import FetchGallery from './components/fetch';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComp />
      <Navigation />
      <FetchGallery /> 
      {/* <GalleryFetch /> */}
    </div>
  );
}

export default App;
