import React, { Component } from 'react'

import Nav from '../nav/'
import Modal from '../modal/'
import SignInForm from '../signInForm/'
import SignUpForm from '../signUpForm/'

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignUpModal: false,
      showSignInModal: false
    }
    this.signUpClose = this.signUpClose.bind(this)
    this.signUpOpen = this.signUpOpen.bind(this)
    this.signInClose = this.signInClose.bind(this)
    this.signInOpen = this.signInOpen.bind(this)
    this.signUpDismissed = this.signUpDismissed.bind(this)
    this.signInDismissed = this.signInDismissed.bind(this)
    this.signUpSave = this.signUpSave.bind(this)
    this.signInSave = this.signInSave.bind(this)
  }

  signUpClose() {
    this.setState({
      showSignUpModal: false
    });
  }

  signUpOpen() {
    this.setState({
      showSignUpModal: true
    });
  }

  signUpDismissed() {

  }

  signUpSave() {

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

  signInDismissed() {

  }

  signInSave() {

  }

  render(){
    return (
      <div className="row" style={{background: '#000'}}>
        <Nav className="col-sm-offset-6 col-xs-offset-3 col-sm-3 col-xs-3"></Nav>
        <div className="col-sm-3 col-xs-6">
          <Modal show={this.state.showSignUpModal} title='Sign Up'
            body={SignUpForm} actionText='Complete' closeHandler={this.signUpClose} actionHandler={this.signUpSave}  />
          <button type="button" className="btn btn-primary" onClick={this.openSignUp}>Sign Up</button>
          &nbsp;&nbsp;
          <Modal show={this.state.showSignInModal} title='Sign In'
            body={SignInForm} actionText='Submit' closeHandler={this.signInClose} actionHandler={this.signInSave}  />
          <button type="button" className="btn btn-primary" onClick={this.openSignIn}>Sign In</button>
        </div>
      </div>
    )
  }
};

export default Header;
