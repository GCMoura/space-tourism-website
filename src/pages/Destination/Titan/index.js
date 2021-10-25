import React from "react";
import DestinationPage from "../../../components/DestinationPage";
import Header from '../../../components/Header'
import Titan from '../../../assets/destination/image-titan.png'

import '../style.css'

function Destination() {
  return( 
    <div className="page-content">
      <Header />
      <DestinationPage 
        image={Titan}
        planet='Titan'
        text="The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundreds degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
        avg='1.6 BIL.'
        time='7 YEARS'
      />
    </div> 
  ) 
}

export default Destination