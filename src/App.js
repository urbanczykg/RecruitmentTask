import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Button from './components/Button'
import axios from 'axios';
import FetchApi from './components/FetchApi'

function App() {
  
  return (
    <div>
      <Header />
  
      <FetchApi/>
    </div>
  )
}

export default App;
