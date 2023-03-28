import React, { useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import './styles/style.css';
import Home from './containers/Home';
import Header from './components/Header';
import VideoPlayer from './containers/VideoPlayer';
import Movies from './containers/Movies';
import Footer from './components/Footer';
import Profile from './containers/Profile';
import Catalog from './containers/Catalog';
import Estimation from './containers/Estimation';


function App() {

  useEffect(() => {
    localStorage.clear();
  });

  return (
    <div className="wrapper">
    <Header/>
    <main>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/player" element={<VideoPlayer cName={'video-wrapper'}/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/catalog' element={<Catalog/>}/>
          <Route path='/estimation' element={<Estimation/>}/>
    </Routes>
    </main>
    <Footer/>
    </div>
  );
}

export default App;
