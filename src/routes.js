import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Destination from './pages/Destination'
import Crew from './pages/Crew'

import Home from './pages/Home/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/destination' component={Destination} /> 
        <Route path='/crew' component={Crew} />

      </Switch>
    </BrowserRouter>
  )
}

export default Routes