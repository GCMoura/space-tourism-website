import React from "react";
import DestinationPage from "../../../components/DestinationPage";
import Header from '../../../components/Header'
import Moon from '../../../assets/destination/image-moon.png'

import '../style.css'

function Destination() {
  return( 
    <div className="page-content">
      <Header />
      <DestinationPage 
        image={Moon}
        planet='Moon'
        text="See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
        avg='384,400'
        time='3 DAYS'
      />
    </div> 
  ) 
}

export default Destination