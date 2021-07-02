import React from 'react'


function Button(props){     
        return(
            <div> 
            {props.isLoading ===true ? <h1> </h1> : <div> <h1> kliknij przycisk, by załadować dane</h1>
             <button className="square" onClick={()=>{ alert('kliknieto w przycisk')}} type="submit"> Load Data
             </button>  </div>}
            
         </div>
            
        )

}

export default Button