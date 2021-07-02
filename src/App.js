import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Api from './api.json'
import Button from './components/Button'
import axios from 'axios';
import FetchApi from './components/FetchApi'

function App() {
  const Url = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json'
  const [vehicle,setVehicle] = useState({})

  
  useEffect(() => {
    axios.get(Url)
      .then(respose =>
        {
          setVehicle(respose.data)
        })

  
  }, [Url])
  console.log("xd");
  return (
    <div>
      <Header />
      {console.log("xd")}
      <h1>{vehicle.Make_Name}</h1>
      {console.log("xd")}
      <FetchApi/>
    </div>
  )
}

export default App;
