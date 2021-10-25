import React from "react";
import Header from "../../../components/Header";
import DestinationPage from "../../../components/DestinationPage";
import Mars from '../../../assets/destination/image-mars.png'

import '../style.css'

function Destination() {
  return( 
    <div className="page-content">
      <Header />
      <DestinationPage 
        image={Mars}
        planet='Mars'
        text="Don't forget to pack your hiking boats. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half time the size of Everest!"
        avg='225 MIL.'
        time='9 MONTHS'
      />
    </div> 
  ) 
}

export default Destination