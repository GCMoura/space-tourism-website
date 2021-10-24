import React from "react";
import DestinationPage from "../../components/DestinationPage";
import Header from '../../components/Header'

import './style.css'

function Destination() {
  return( 
    <div className="page-content">
      <Header />
      <DestinationPage />
    </div> 
  ) 
}

export default Destination