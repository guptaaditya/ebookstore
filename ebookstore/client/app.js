import React, { Component } from 'react'
import { Route, Link, HashRouter, Switch } from 'react-router-dom'
//import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoutec  } from 'react-router'

class App extends Component {
  render () {
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
    )
  }
}

const Nav = () => (
  <div>
    <Link to='/'>Home</Link>&nbsp;
    <Link to='/address'>Address</Link>
  </div>
)

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const Address = () => <h1>We are located at 555 Jackson St.</h1>
const NotFound = () => <h1>404.. This page is not found!</h1>

export default App
