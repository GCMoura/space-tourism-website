import React from "react";
import Header from "../../components/Header";

import Spaceport from '../../assets/technology/image-spaceport-portrait.jpg'

import './style.css'

function Technology(){
  return(
    <div className="tech-content">
      <Header />
      <main className="tech-page"> 
        <div className="tech-left-side">
          <div className="tech-title">
            <span>03</span>
            SPACE LAUNCH 101
          </div>
          <div className="tech-information-div">
            <div className="tech-links">
              <button>1</button>
              <button>2</button>
              <button>3</button>
            </div> 
            <div className="tech-information">
              <div className="tech-title"> THE TERMINOLOGY ...</div>
              <div className="tech-name">SPACEPORT</div>
              <div className="tech-text">A Spaceport or cosmodrome is a site for lauching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage os the Earth's rotation for launch.</div>
            </div>
          </div>
        </div>
        <div className="tech-right-side">
          <div className="position-image" >
            <img src={Spaceport} alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Technology