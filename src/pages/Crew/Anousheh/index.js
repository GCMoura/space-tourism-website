import React from "react";
import CrewPage from "../../../components/CrewPage";
import Header from "../../../components/Header";
import Image from '../../../assets/crew/image-anousheh-ansari.png'

import '../style.css'

function Anousheh() {
  return (
    <main className="crew-content">
      <Header />
      <CrewPage 
        job="FLIGHT ENGINEER"
        name="ANOUSHEH ANSARI"
        text="Anousheh Ansari is an Iranian American engineer and co-founder of Prodea System. Ansari was the fourth self-founded space tourist, the first self-founded woman to fly to the ISS, and the first Iranian in space."
        image={Image}
        href="/anousheh"
      />
    </main>
  )
}

export default Anousheh