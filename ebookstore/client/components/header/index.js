import React, { Component } from 'react'

import Nav from '../nav/'
export class Header extends Component {
  constructor(props) {
    super(props)
    this.openSignUp = this.openSignUp.bind(this)
    this.openSignIn = this.openSignIn.bind(this)
  }

  openSignIn(){

  }

  openSignUp(){

  }

  render(){
    return (
      <div className="row" style={{background: '#000'}}>
        <Nav className="col-sm-offset-6 col-xs-offset-3 col-sm-3 col-xs-3"></Nav>
        <div className="col-sm-3 col-xs-6">
          <button type="button" className="btn btn-primary" onClick={this.openSignUp}>Sign Up</button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-primary" onClick={this.openSignIn}>Sign In</button>
        </div>
      </div>
    )
  }
};

export default Header;
