import React, { Component } from 'react'

import Nav from '../nav/'
import SignIn from '../signIn/'
import SignUp from '../signUp/'

export class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="row" style={{background: '#000', padding: '5px 0px'}}>
        <Nav className="col-sm-offset-6 col-xs-offset-3 col-sm-3 col-xs-3"></Nav>
        <div className="col-sm-3 col-xs-6">
          <SignUp />
          &nbsp;&nbsp;
          <SignIn />
        </div>
      </div>
    )
  }
}

export default Header;
