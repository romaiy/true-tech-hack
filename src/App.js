import React from 'react';
import './styles/style.css';
import { Routes, Route} from 'react-router-dom';
import Home from './containers/Home';
import Header from './components/Header';
import VideoPlayer from './containers/VideoPlayer';

function App() {
  
  return (
    <div className="wrapper">
    <Header/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/player' element={<VideoPlayer/>}/>
    </Routes>
    </div>
  );
}

export default App;
