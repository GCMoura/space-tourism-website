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
    let nameMoon = document.querySelector('#name-moon')
    let nameMars = document.querySelector('#name-mars')
    let nameEuropa = document.querySelector('#name-europa')
    let nameTitan = document.querySelector('#name-titan')
    let textMoon = document.querySelector('#text-moon')
    let textMars = document.querySelector('#text-mars')
    let textEuropa = document.querySelector('#text-europa')
    let textTitan = document.querySelector('#text-titan')
    let avgMoon = document.querySelector('#avg-moon')
    let avgMars = document.querySelector('#avg-mars')
    let avgEuropa = document.querySelector('#avg-europa')
    let avgTitan = document.querySelector('#avg-titan')
    let timeMoon = document.querySelector('#time-moon')
    let timeMars = document.querySelector('#time-mars')
    let timeEuropa = document.querySelector('#time-europa')
    let timeTitan = document.querySelector('#time-titan')

    if(name === 'moon'){
      moon.style.display="block"
      mars.style.display="none"
      europa.style.display="none"
      titan.style.display="none"
      nameMoon.style.display="block"
      nameMars.style.display="none"
      nameEuropa.style.display="none"
      nameTitan.style.display="none"
      textMoon.style.display="block"
      textMars.style.display="none"
      textEuropa.style.display="none"
      textTitan.style.display="none"
      avgMoon.style.display="block"
      avgMars.style.display="none"
      avgEuropa.style.display="none"
      avgTitan.style.display="none"
      timeMoon.style.display="block"
      timeMars.style.display="none"
      timeEuropa.style.display="none"
      timeTitan.style.display="none"

    } else if(name === 'mars'){
      moon.style.display="none"
      mars.style.display="block"
      europa.style.display="none"
      titan.style.display="none"
      nameMoon.style.display="none"
      nameMars.style.display="block"
      nameEuropa.style.display="none"
      nameTitan.style.display="none"
      textMoon.style.display="none"
      textMars.style.display="block"
      textEuropa.style.display="none"
      textTitan.style.display="none"
      avgMoon.style.display="none"
      avgMars.style.display="block"
      avgEuropa.style.display="none"
      avgTitan.style.display="none"
      timeMoon.style.display="none"
      timeMars.style.display="block"
      timeEuropa.style.display="none"
      timeTitan.style.display="none"
    } else if(name === 'europa'){
      moon.style.display="none"
      mars.style.display="none"
      europa.style.display="block"
      titan.style.display="none"
      nameMoon.style.display="none"
      nameMars.style.display="none"
      nameEuropa.style.display="block"
      nameTitan.style.display="none"
      textMoon.style.display="none"
      textMars.style.display="none"
      textEuropa.style.display="block"
      textTitan.style.display="none"
      avgMoon.style.display="none"
      avgMars.style.display="none"
      avgEuropa.style.display="block"
      avgTitan.style.display="none"
      timeMoon.style.display="none"
      timeMars.style.display="none"
      timeEuropa.style.display="block"
      timeTitan.style.display="none"
    } else if(name === 'titan'){
      moon.style.display="none"
      mars.style.display="none"
      europa.style.display="none"
      titan.style.display="block"
      nameMoon.style.display="none"
      nameMars.style.display="none"
      nameEuropa.style.display="none"
      nameTitan.style.display="block"
      textMoon.style.display="none"
      textMars.style.display="none"
      textEuropa.style.display="none"
      textTitan.style.display="block"
      avgMoon.style.display="none"
      avgMars.style.display="none"
      avgEuropa.style.display="none"
      avgTitan.style.display="block"
      timeMoon.style.display="none"
      timeMars.style.display="none"
      timeEuropa.style.display="none"
      timeTitan.style.display="block"
    }
  }

  return(
    <div className="destination-content">
      <Header />
      <main className="destination-page">
        <div className="destination-left-side"> 
          <div className="destination-title">
            <span className="title-span">01</span>
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
            <button onClick={() => changePlanet('moon')} className="planet-button-nav">MOON</button>
            <button onClick={() => changePlanet('mars')} className="planet-button-nav">MARS</button>
            <button onClick={() => changePlanet('europa')} className="planet-button-nav">EUROPA</button>
            <button onClick={() => changePlanet('titan')} className="planet-button-nav">TITAN</button>
          </div>
          <div className="planet-name"> 
            <p className='destination' id="name-moon"  >MOON</p>
            <p className='destination' id="name-mars" >MARS</p>
            <p className='destination' id="name-europa" >EUROPA</p>
            <p className='destination' id="name-titan" >TITAN</p>
          </div>
          <div className='planet-text'>
            <p id="text-moon"> See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
            <p id="text-mars">Don't forget to pack your hiking boats. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half time the size of Everest!</p>
            <p id="text-europa">The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin</p>
            <p id="text-titan">The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundreds degrees colder!). As a bonus, you get striking views of the Rings of Saturn</p>
          </div>
          <div className="planet-data">
            <div className="avg-data">
              <p className="planet-data-title">AVG. DISTANCE</p>
              <p className="planet-data-number" id="avg-moon" >384,400 KM</p>
              <p className="planet-data-number" id="avg-mars" >225 MIL. KM</p>
              <p className="planet-data-number" id="avg-europa" >628 MIL. KM</p>
              <p className="planet-data-number" id="avg-titan" >1.6 BIL. KM</p>
            </div>
            <div className="time-data">
              <p className="planet-data-title">EST. TRAVEL TIME</p>
              <p className="planet-data-number" id="time-moon" >3 DAYS</p>
              <p className="planet-data-number" id="time-mars" >9 MONTHS</p>
              <p className="planet-data-number" id="time-europa">3 YEARS</p>
              <p className="planet-data-number" id="time-titan" >7 YEARS</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default Destination