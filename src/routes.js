import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Moon from './pages/Destination/Moon'
import Mars from './pages/Destination/Mars'
import Europa from './pages/Destination/Europa'
import Titan from './pages/Destination/Titan'

import Home from './pages/Home/index'

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/destination/moon' component={Moon} /> 
        <Route path='/destination/mars' component={Mars} /> 
        <Route path='/destination/europa' component={Europa} /> 
        <Route path='/destination/titan' component={Titan} /> 
      </Switch>
    </BrowserRouter>
  )
}

export default Routes