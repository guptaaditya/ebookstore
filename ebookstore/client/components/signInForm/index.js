import React, { Component } from 'react'

export class SignInForm extends Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <form name="loginForm" id="loginForm" method="post">
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="Username" name="userinfo" type="text" autofocus />
        </div>
        <div className="form-group">
            <input className="form-control" id="password" placeholder="Password" name="password" type="password" value="" />
        </div>
        <input type="submit" className="btn btn-lg btn-success btn-block" value="Login" name="submitLogin" id="submitLogin" />
      </form>
    )
  }
};

export default SignInForm;
