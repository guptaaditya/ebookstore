import React, { Component } from 'react'
import Modal from '../modal/'

class SignUpInput extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <form name="SignUp" id="SignUp" method="post">
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="First Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="Last Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="userinfo" placeholder="User Name" name="userinfo" type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" id="password" placeholder="Password" name="password" type="password" value="" />
        </div>
      </form>
    )
  }
}

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignUpModal: false
    }
    this.signUpClose = this.signUpClose.bind(this)
    this.signUpOpen = this.signUpOpen.bind(this)
    this.signUpSave = this.signUpSave.bind(this)
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

  signUpSave() {

  }

  render(){
    return (
      <span>
        <Modal modalWidth="35%" show={this.state.showSignUpModal} title='Sign Up'
          body={SignUpInput} actionText='Complete' closeHandler={this.signUpClose} actionHandler={this.signUpSave}  />
        <button type="button" className="btn btn-primary" onClick={this.signUpOpen}>Sign Up</button>
      </span>
    )
  }
};

export default SignUp;
