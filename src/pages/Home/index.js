import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";

import './style.css'

function Home(){
  
  return(
    <div className="main-content">
      <Header />
      <Main />
    </div>
  )
}

export default Home