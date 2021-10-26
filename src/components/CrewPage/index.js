import React from "react";
import Link from '../../components/Link'

import './style.css'

function CrewPage({ job, name, text, image, href }){
  return(
    <div className="crew-view">
      <div className="crew-information">
        <div className="crew-title">MEET YOUR CREW</div>
        <div className="crew-name-information">
          <div className="crew-job">{job}</div>
          <div className="crew-name">{name}</div>
          <div className="crew-text">{text}</div>
        </div>
        <div className="crew-sidebar">
          <div className="side side-1">
            <Link href='/crew/douglas' link="" ></Link>
          </div>
          <div className="side side-2">
            <Link href='/crew/mark' link="" ></Link>
          </div>
          <div className="side side-3">
            <Link href='/crew/victor' link="" ></Link>
          </div>
          <div className="side side-4">
            <Link href='/crew/anousheh' link="" ></Link>
          </div>
        </div>
      </div>
      <div className="crew-image">
        <img src={image} alt=""/>
      </div>
    </div>
  )
}

export default CrewPage