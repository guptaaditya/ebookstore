import React, { Component } from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'

import Address from '../components/address/'
import Container from '../components/container/'
import NotFound from '../components/default/'
import Home from '../components/home/'

export class RoutesList extends Component{
  render(){
    return (
      <HashRouter>
        <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/address' component={Address} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </HashRouter>
    );
  }
}

export default RoutesList
