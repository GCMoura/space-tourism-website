import React from "react";

import Link from "../Link";
import './style.css'

function DestinationPage({ image, planet, text, avg, time }){
  return (
    
      
      <div className="planet-information">
        <div className="planet-links"> 
          <Link href='/destination/moon' link='MOON'></Link>
          <Link href='/destination/mars' link='MARS'></Link>
          <Link href='/destination/europa' link='EUROPA'></Link>
          <Link href='/destination/titan' link='TITAN'></Link>
        </div>
        <div className="planet-name">
          <p className="destination-name">{planet}</p>
          <p className="destination-text">{text}</p>
        </div>
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