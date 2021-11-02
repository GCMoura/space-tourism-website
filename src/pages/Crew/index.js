import React from "react";
import Header from "../../components/Header";

import Douglas from '../../assets/crew/image-douglas-hurley.png'
import Mark from '../../assets/crew/image-mark-shuttleworth.png'
import Victor from '../../assets/crew/image-victor-glover.png'
import Anousheh from '../../assets/crew/image-anousheh-ansari.png'

import './style.css'

function Crew(){

  function changeCrew(name) {
    let douglasInformation = document.querySelector('#douglas')
    let markInformation = document.querySelector('#mark')
    let victorInformation = document.querySelector('#victor')
    let anoushehInformation = document.querySelector('#anousheh')

    let douglasImage = document.querySelector('#douglas-image')
    let markImage = document.querySelector('#mark-image')
    let victorImage = document.querySelector('#victor-image')
    let anoushehImage = document.querySelector('#anousheh-image')

    if(name === 'douglas'){
      douglasInformation.style.display = 'block'
      markInformation.style.display = 'none'
      victorInformation.style.display = 'none'
      anoushehInformation.style.display = 'none'
      douglasImage.style.display = 'block'
      markImage.style.display = 'none'
      victorImage.style.display = 'none'
      anoushehImage.style.display = 'none'
    } else if(name === 'mark'){
      douglasInformation.style.display = 'none'
      markInformation.style.display = 'block'
      victorInformation.style.display = 'none'
      anoushehInformation.style.display = 'none'
      douglasImage.style.display = 'none'
      markImage.style.display = 'block'
      victorImage.style.display = 'none'
      anoushehImage.style.display = 'none'
    } else if(name === 'victor'){
      douglasInformation.style.display = 'none'
      markInformation.style.display = 'none'
      victorInformation.style.display = 'block'
      anoushehInformation.style.display = 'none'
      douglasImage.style.display = 'none'
      markImage.style.display = 'none'
      victorImage.style.display = 'block'
      anoushehImage.style.display = 'none'
    } else if(name === 'anousheh'){
      douglasInformation.style.display = 'none'
      markInformation.style.display = 'none'
      victorInformation.style.display = 'none'
      anoushehInformation.style.display = 'block'
      douglasImage.style.display = 'none'
      markImage.style.display = 'none'
      victorImage.style.display = 'none'
      anoushehImage.style.display = 'block'
    }
  }

  return(
    <div className="crew-content">
      <Header />
      <main className="crew-page">
        <div className="crew-left-side">
            <div className="crew-title">
              <span className="title-span">02</span>
              MEET YOUR CREW
            </div>
            <div className="crew-information" id="douglas">
              <div className="crew-job">COMMANDER</div>
              <div className="crew-name">DOUGLAS HURLEY</div>
              <div className="crew-text">Douglas Gerald Hurley is an American engineer, formor Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</div>
            </div>
            <div className="crew-information" id="mark">
              <div className="crew-job">MISSION SPECIALIST</div>
              <div className="crew-name">MARK SHUTTLEWORTH</div>
              <div className="crew-text">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operatin system. Shuttleworth became the first South African to space as space tourist.</div>
            </div>
            <div className="crew-information" id="victor">
              <div className="crew-job">PILOT</div>
              <div className="crew-name">VICTOR GLOVER</div>
              <div className="crew-text">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in teh U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station system flight engineer.</div>
            </div>
            <div className="crew-information" id="anousheh">
              <div className="crew-job">FLIGHT ENGINEER</div>
              <div className="crew-name">ANOUSHEH ANSARI</div>
              <div className="crew-text">Anousheh Ansari is an Iranian American engineer and co-founder of Prodea System. Ansari was the fourth self-founded space tourist, the first self-founded woman to fly to the ISS, and the first Iranian in space.</div>
            </div>
            <div className="crew-links">
              <button onClick={() => changeCrew('douglas')} ></button>
              <button onClick={() => changeCrew('mark')} ></button>
              <button onClick={() => changeCrew('victor')} ></button>
              <button onClick={() => changeCrew('anousheh')} ></button>
            </div>
        </div>
        <div className="crew-right-side" id="douglas-image">
          <div className="position-image-crew">
            <img src={Douglas}  alt="" />
          </div>
        </div>
        <div className="crew-right-side" id="mark-image">
          <div className="position-image-crew">
            <img src={Mark}  alt="" />
          </div>
        </div>
        <div className="crew-right-side" id="victor-image">
          <div className="position-image-crew">
            <img src={Victor}  alt="" />
          </div>
        </div>
        <div className="crew-right-side" id="anousheh-image">
          <div className="position-image-crew">
            <img src={Anousheh}  alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Crew