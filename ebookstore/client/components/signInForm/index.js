import React, { Component } from 'react'

export class SignInForm extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <form name="loginForm" id="loginForm" method="post">
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="Username" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="password" placeholder="Password" name="password" type="password" value="" />
        </div>
      </form>
    )
  }
}

export default SignInForm;
