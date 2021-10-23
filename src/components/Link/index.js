import React from "react";

import './style.css'

function Link({ href, link }){
  return( 
    <a href={href}>{link}</a>
  )
}

export default Link