import React from "react";
import Header from "../../components/Header";

import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import launchVehiclePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import launchVehicleLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import spaceCapsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceCapsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'

import './style.css'

function Technology(){

  const windowSize = document.body.scrollWidth

  function changeTech(name){

    let spaceport = document.querySelector('.spaceport')
    let launchVehicle = document.querySelector('.launchVehicle')
    let spaceCapsule = document.querySelector('.spaceCapsule')
    let spaceportId = document.querySelector('#spaceport')
    let launchVehicleId = document.querySelector('#launchVehicle')
    let spaceCapsuleId = document.querySelector('#spaceCapsule')

    if(name === 'spaceport'){
      spaceport.style.display = "block"
      launchVehicle.style.display = "none"
      spaceCapsule.style.display = "none"
      spaceportId.style.display = "block"
      launchVehicleId.style.display = "none"
      spaceCapsuleId.style.display = "none"
    } else if(name === 'launchVehicle'){
      spaceport.style.display = "none"
      launchVehicle.style.display = "block"
      spaceCapsule.style.display = "none"
      spaceportId.style.display = "none"
      launchVehicleId.style.display = "block"
      spaceCapsuleId.style.display = "none"
    } else if(name === 'spaceCapsule'){
      spaceport.style.display = "none"
      launchVehicle.style.display = "none"
      spaceCapsule.style.display = "block"
      spaceportId.style.display = "none"
      launchVehicleId.style.display = "none"
      spaceCapsuleId.style.display = "block"
    }

  }

  return(
    <div className="tech-content">
      <Header />
      <div className="tech-title-page">
        <span className="title-span"  >03</span>
        SPACE LAUNCH 101
      </div>
      <main className="tech-page"> 
        <div className="tech-left-side">
          <div className="tech-information-div">
            <div className="tech-links">
              <button onClick={() => changeTech('spaceport')} >1</button>
              <button onClick={() => changeTech('launchVehicle')} >2</button>
              <button onClick={() => changeTech('spaceCapsule')} >3</button>
            </div> 
            <div className="tech-information" id="spaceport">
              <div className="tech-title"> THE TERMINOLOGY ...</div>
              <div className="tech-name">SPACEPORT</div>
              <div className="tech-text">A Spaceport or cosmodrome is a site for lauching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage os the Earth's rotation for launch.</div>
            </div>
            <div className="tech-information" id="launchVehicle">
              <div className="tech-title"> THE TERMINOLOGY ...</div>
              <div className="tech-name">LAUNCH VEHICLE</div>
              <div className="tech-text">A launch vehicle or carrier rocket ia a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerfull in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!</div>
            </div>
            <div className="tech-information " id="spaceCapsule">
              <div className="tech-title"> THE TERMINOLOGY ...</div>
              <div className="tech-name">SPACE CAPSULE</div>
              <div className="tech-text">A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend yout time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained. </div>
            </div>
          </div>
        </div>
        <div className="tech-right-side">
          <div className="position-image" >
            <div className="spaceport">
              {
                windowSize > 1220 ? 
                <img src= {spaceportPortrait} alt="" /> :
                <img src={spaceportLandscape} alt=""/>
              }
            </div>
            <div className="launchVehicle">
              {
                windowSize > 1220 ? 
                <img src= {launchVehiclePortrait} alt="" /> :
                <img src={launchVehicleLandscape} alt=""/>
              }
            </div>
            <div className="spaceCapsule">
              {
                windowSize > 1220 ? 
                <img src= {spaceCapsulePortrait} alt="" /> :
                <img src={spaceCapsuleLandscape} alt=""/>
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Technology