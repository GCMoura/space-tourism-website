import React from "react";
import CrewPage from "../../../components/CrewPage";
import Header from "../../../components/Header";
import Image from '../../../assets/crew/image-victor-glover.png'

import '../style.css'

function Victor() {
  return (
    <main className="crew-content">
      <Header />
      <CrewPage 
        job="PILOT"
        name="VICTOR GLOVER"
        text="Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in teh U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station system flight engineer."
        image={Image}
      />
    </main>
  )
}

export default Victor