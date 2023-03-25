import React from 'react';
import './styles/style.css';
import Home from './containers/Home';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
    <Header/>
    <Home/>
    </div>
  );
}

export default App;
