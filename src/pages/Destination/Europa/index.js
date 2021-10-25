import React from "react";
import Header from "../../../components/Header";
import DestinationPage from "../../../components/DestinationPage";
import Europa from '../../../assets/destination/image-europa.png'

import '../style.css'

function Destination() {
  return( 
    <div className="page-content">
      <Header />
      <DestinationPage 
        image={Europa}
        planet='Europa'
        text="The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin"
        avg='628 MIL.'
        time='3 YEARS'
      />
    </div> 
  ) 
}

export default Destination