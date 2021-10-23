import React from "react";

import './style.css'

function Main(){
  return(
    <main className="page-content">
      <div className="page-left">
        <div className="text">
          <p className="text-1">SO, YOU WANT TO TRAVEL TO</p>
          <p className="text-2">SPACE</p>
          <p className="text-3">Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a trully out of this world experience!</p>
        </div>
      </div>
      <div className="page-right">
        <button className="explore-button">
          EXPLORE
        </button>
      </div>
    </main>
  )
}

export default Main