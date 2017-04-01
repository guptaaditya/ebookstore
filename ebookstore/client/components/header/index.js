import React, { Component } from 'react'

import Nav from '../nav/'
export class Header extends Component {
  render(){
    return (
      <div className="row" style={{background: '#000'}}>
        <Nav className="col-sm-offset-6 col-xs-offset-3 col-sm-3 col-xs-3"></Nav>
        <div className="col-sm-3 col-xs-6">
          <button type="button" className="btn btn-primary">Sign Up</button>
          &nbsp;&nbsp;
          <button type="button" className="btn btn-primary">Sign In</button>
        </div>
      </div>
    )
  }
};

export default Header;
