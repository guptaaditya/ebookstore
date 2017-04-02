import React, { Component } from 'react'
import Modal from '../modal/'

class SignInInput extends Component {
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

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignInModal: false
    }
    this.signInClose = this.signInClose.bind(this)
    this.signInOpen = this.signInOpen.bind(this)
    this.signInSave = this.signInSave.bind(this)
  }

  signInClose() {
    this.setState({
      showSignInModal: false
    });
  }

  signInOpen() {
    this.setState({
      showSignInModal: true
    });
  }

  signInSave() {

  }

  render(){
    return (
      <span>
        <Modal modalWidth="25%" show={this.state.showSignInModal} title='Sign In'
          body={SignInInput} actionText='Submit' closeHandler={this.signInClose} actionHandler={this.signInSave}  />
        <button type="button" className="btn btn-primary" onClick={this.signInOpen}>Sign In</button>
      </span>
    )
  }
}

export default SignIn;
