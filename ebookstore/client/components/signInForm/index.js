import React, { Component } from 'react'

export class SignInForm extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <div className="row" style={{background: '#000'}}>
        <Nav className="col-sm-offset-6 col-xs-offset-3 col-sm-3 col-xs-3"></Nav>
        <div className="col-sm-3 col-xs-6">
        </div>
      </div>
    )
  }
};

export default SignInForm;
