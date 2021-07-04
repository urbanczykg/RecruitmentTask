import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import FetchApi from './components/FetchApi'
import './App.css'
import './index.css';
import Footer from './components/Footer';
import Form from './components/form'
function App() {
  
  return (
    <div className = "appka">
      <Header />
      <FetchApi/>
     
     
      </div>
  )
}

export default App;
