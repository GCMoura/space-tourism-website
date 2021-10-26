import React from "react";
import CrewPage from "../../../components/CrewPage";
import Header from "../../../components/Header";
import Image from '../../../assets/crew/image-douglas-hurley.png'

import '../style.css'

function Douglas() {
  return (
    <main className="crew-content">
      <Header />
      <CrewPage 
        job="COMMANDER"
        name="DOUGLAS HURLEY"
        text="Douglas Gerald Hurley is an American engineer, formor Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        image={Image}
      />
    </main>
  )
}

export default Douglas