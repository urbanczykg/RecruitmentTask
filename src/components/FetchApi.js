import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import '../App.css';
import Form from './form';

function FetchApi() {

  const [data, setData] = useState([{}]);
  const [hasError, setHasError] = useState(false);
  const [loadingData, setLoadingData] = useState(false)
  const entries = Object.entries(data);

  const handleClick = () => {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json"
    )
      .then((response) => response.json())
      .then((res) => setData(res.Results))
      .then((res) => setLoadingData(true))
      .catch((err) => setHasError(true));

  };

  return (
    <div className="api">
        
       {!loadingData ? <button className="button" onClick = {handleClick} > Załaduj dane</button>  :
        
        <div className= "data">
             <Form />

         <p className="category">Marka:&nbsp;&nbsp;  ID: &nbsp;&nbsp; Model:</p>
          {data.map((item) => (
            <table>
                    <tr>
                        <th> {item.Make_Name} &nbsp;&nbsp;&nbsp;</th>
                        <br/>
                        <th> {item.Model_ID}&nbsp;&nbsp;&nbsp;</th>
                        <br/>
                        <th>{item.Model_Name}&nbsp;&nbsp;&nbsp;</th>
                        <br/>
                    </tr>
                </table> 
          ))}
    
        </div>
        
          } 
</div>
  )
}
export default FetchApi;
