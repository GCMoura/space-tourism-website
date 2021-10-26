import React from "react";
import Header from '../../components/Header'

import Moon from '../../assets/destination/image-moon.png'
import Mars from '../../assets/destination/image-mars.png'
import Europa from '../../assets/destination/image-europa.png'
import Titan from '../../assets/destination/image-titan.png'


import './style.css'

function Destination(){

  function changePlanet(name){

    let moon = document.querySelector('#moon')
    let mars = document.querySelector('#mars')
    let europa = document.querySelector('#europa')
    let titan = document.querySelector('#titan')

    if(name === 'moon'){
      moon.style.display="block"
      mars.style.display="none"
      europa.style.display="none"
      titan.style.display="none"
    } else if(name === 'mars'){
      moon.style.display="none"
      mars.style.display="block"
      europa.style.display="none"
      titan.style.display="none"
    } else if(name === 'europa'){
      moon.style.display="none"
      mars.style.display="none"
      europa.style.display="block"
      titan.style.display="none"
    } else if(name === 'titan'){
      moon.style.display="none"
      mars.style.display="none"
      europa.style.display="none"
      titan.style.display="block"
    }

  }

  return(
    <div className="destination-content">
      <Header />
      <main className="destination-page">
        <div className="destination-left-side"> 
          <div className="destination-title">
            <span>01</span>
            PICK YOUR DESTINATION
          </div>
          <div className="planet-image" id="moon">
            <img src={Moon} alt=""/>
          </div>
          <div className="planet-image" id="europa">
            <img src={Europa} alt=""/>
          </div>
          <div className="planet-image" id="mars">
            <img src={Mars} alt=""/>
          </div>
          <div className="planet-image" id="titan">
            <img src={Titan} alt=""/>
          </div>
        </div>
        <div className="destination-right-side"> 
          <div className="planet-links"> 
            <button onClick={() => changePlanet('moon')} >Moon</button>
            <button onClick={() => changePlanet('mars')}>Mars</button>
            <button onClick={() => changePlanet('europa')}> Europa</button>
            <button onClick={() => changePlanet('titan')}> Titan</button>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Destination