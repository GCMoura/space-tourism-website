import React from "react";
import CrewPage from "../../../components/CrewPage";
import Header from "../../../components/Header";
import Image from '../../../assets/crew/image-mark-shuttleworth.png'

import '../style.css'

function Mark() {
  return (
    <main className="crew-content">
      <Header />
      <CrewPage 
        job="MISSION SPECIALIST"
        name="MARK SHUTTLEWORTH"
        text="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operatin system. Shuttleworth became the first South African to space as space tourist."
        image={Image}
      />
    </main>
  )
}

export default Mark