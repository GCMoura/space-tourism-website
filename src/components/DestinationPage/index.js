import React from "react";

import Link from "../Link";
import './style.css'

function DestinationPage({ image, planet, text, avg, time }){
  return (
    
      
      <div className="planet-information">
        
       
        <div className="planet-data">
          <div className='planet-avg'>
            <p className="planet-data-title">AVG. DISTANCE</p>
            <p className="planet-data-number">{avg} KM</p>
          </div>
          <div className="planet-time">
            <p className="planet-data-title">EST. TRAVEL TIME</p>
            <p className="planet-data-number">{time}</p>
          </div>
        </div>
      </div>

  )
}

export default DestinationPage