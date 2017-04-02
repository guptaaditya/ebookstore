import React, { Component } from 'react'
import Modal from '../modal/'

class SignUpInput extends Component {
  constructor(props) {
    super(props)
    this.userNameChange = this.userNameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
    this.firstNameChange = this.firstNameChange.bind(this)
    this.lastNameChange = this.lastNameChange.bind(this)
  }

  firstNameChange(event){
    this.props.optionalMethod({firstName: event.target.value})
  }

  lastNameChange(event) {
    this.props.optionalMethod({lastName: event.target.value})
  }

  passwordChange(event){
    this.props.optionalMethod({password: event.target.value})
  }

  userNameChange(event) {
    this.props.optionalMethod({userName: event.target.value})
  }

  render(){
    return (
      <form name="SignUp" id="SignUp" method="post">
        <div className="form-group">
            <input className="form-control" placeholder="First name" type="text" onChange={this.firstNameChange} />
        </div>
        <div className="form-group">
            <input className="form-control" placeholder="Last name" type="text" onChange={this.lastNameChange} />
        </div>
        <div className="form-group">
            <input className="form-control" placeholder="User name" type="text" onChange={this.userNameChange} />
        </div>
        <div className="form-group">
            <input className="form-control" placeholder="Password" type="password" onChange={this.passwordChange} />
        </div>
      </form>
    )
  }
}

SignUpInput.propTypes = {
  updateChanges: React.PropTypes.func.isRequired,
}

SignUpInput.defaultProps = {
  updateChanges: (event) => console.log('From input component',event),
}

export class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignUpModal: false,
      firstName: '',
      lastName: '',
      userName: '',
      passWord: ''
    }
    this.signUpClose = this.signUpClose.bind(this)
    this.signUpOpen = this.signUpOpen.bind(this)
    this.signUpSave = this.signUpSave.bind(this)
    this.updateChanges = this.updateChanges.bind(this);
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
    alert(this.state.userName+this.state.password);
  }

  updateChanges(changedData) {
    this.setState(Object.assign(this.state, changedData))
  }

  render(){
    return (
      <span>
        <Modal modalWidth="35%" show={this.state.showSignUpModal} title='Sign Up' optionalBodyProp={this.updateChanges}
          body={SignUpInput} actionText='Complete' closeHandler={this.signUpClose} actionHandler={this.signUpSave}  />
        <button type="button" className="btn btn-primary" onClick={this.signUpOpen}>Sign Up</button>
      </span>
    )
  }
};

export default SignUp;
