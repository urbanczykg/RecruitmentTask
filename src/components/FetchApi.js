import React,{useEffect,useState} from 'react'

function FetchApi(){
 
    const [data,setData] = useState({})
    const [hasError, setHasError] =useState(false)
    const entries =Object.entries(data);
    const ApiGet = () => {
        fetch ("https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/honda?format=json")
        .then(response => response.json())
        .then(res =>setData(res))
        .catch(err=>setHasError(true))
    }
    useEffect(()=>{
        ApiGet()
    }, [])

    return (
        <div>
            My Api <br />
            <button onClick ={ApiGet}> Fetch API</button>
 
           
            <div>
                <ul>
                   
                  {data.map(item =>
                 <div>
                <p> {item} </p>
                    <li key ={item.Make_ID}>
                            {item.Make_Name} {item.Model_ID} {item.Model_Name}

                    </li>
                    </div>
            )}
                </ul>
             
            </div>
           
        </div>
    )

 }
export default FetchApi