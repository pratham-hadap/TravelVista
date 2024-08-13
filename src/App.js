import React, { useState } from "react";
import { Tours } from "./components/Tours";
import data from "./data"

const App = () => {

  const [tours, setTours] = useState(data);

  function notIntrestedHandler(id){
    const newTours = tours.filter( tour => tour.id !== id )
    setTours(newTours)
  }

  if( tours.length === 0){
   return(
    <div className="refresh">
      <div>No Tour Left</div>
      <button className=" btn-white" onClick={() => setTours(data)} >Refresh</button>
    </div>
   )
  }
 

  return (
     <div className="app">
       <Tours tours = {tours} removeTour ={notIntrestedHandler} ></Tours>
     </div>
  )
};

export default App;
