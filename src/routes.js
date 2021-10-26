import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Moon from './pages/Destination/Moon'
import Mars from './pages/Destination/Mars'
import Europa from './pages/Destination/Europa'
import Titan from './pages/Destination/Titan'
import Douglas from './pages/Crew/Douglas'
import Mark from './pages/Crew/Mark'
import Victor from './pages/Crew/Victor'
import Anousheh from './pages/Crew/Anousheh'

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
        <Route path='/crew/douglas' component={Douglas} />
        <Route path='/crew/mark' component={Mark} />
        <Route path='/crew/victor' component={Victor} />
        <Route path='/crew/anousheh' component={Anousheh} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes