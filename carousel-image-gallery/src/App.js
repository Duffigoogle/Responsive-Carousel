import React from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from './components/Carouselcomp';
import Header from './components/Header';
import Navigation from './components/Navigation';
// import FetchGallery from './components/FetchGallery';
import Search from './components/Search';
import Container from './components/Container';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComp />
      <Navigation />
      <Search />
      <Container />
      <Footer />
      {/* <GalleryFetch /> */}
    </div>
  );
}

export default App;
