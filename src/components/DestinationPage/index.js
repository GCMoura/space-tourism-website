import React from "react";

import Moon from '../../assets/destination/image-moon.png'
import Link from "../Link";
import './style.css'

function DestinationPage(){
  return (
    <main className="destination-page">
      <div className="planet-image">
        <div className="destination-title">PICK YOUR DESTINATION</div>
        <img src={Moon} alt=""/>
      </div>
      <div className="planet-information">
        <div className="planet-links"> 
          <Link href='#' link='MOON'></Link>
          <Link href='#' link='MARS'></Link>
          <Link href='#' link='EUROPA'></Link>
          <Link href='#' link='TITAN'></Link>
        </div>
        <div className="planet-name">
          <p className="destination-name">MOON</p>
          <p className="destination-text">See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
        </div>
        <div className="planet-data">
          <div className='planet-avg'>
            <p className="planet-data-title">AVG. DISTANCE</p>
            <p className="planet-data-number">384,400 KM</p>
          </div>
          <div className="planet-time">
            <p className="planet-data-title">EST. TRAVEL TIME</p>
            <p className="planet-data-number">3 DAYS</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default DestinationPage