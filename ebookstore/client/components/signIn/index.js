import React, { Component } from 'react'
import Modal from '../modal/'

class SignInInput extends Component {
  constructor(props) {
    super(props)
    this.userNameChange = this.userNameChange.bind(this)
    this.passwordChange = this.passwordChange.bind(this)
  }

  passwordChange(event){
    this.props.optionalMethod({password: event.target.value})
  }

  userNameChange(event) {
    this.props.optionalMethod({userName: event.target.value})
  }

  render(){
    return (
      <form name="loginForm" id="loginForm" method="post">
        <div className="form-group">
            <input className="form-control" placeholder="Username" onChange={this.userNameChange} type="text" />
        </div>
        <div className="form-group">
            <input className="form-control" placeholder="Password" onChange={this.passwordChange} type="password" />
        </div>
      </form>
    )
  }
}

SignInInput.propTypes = {
  updateChanges: React.PropTypes.func.isRequired,
}

SignInInput.defaultProps = {
  updateChanges: (event) => console.log('From input component',event),
}

export class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSignInModal: false,
      userName: '',
      passWord: ''
    }
    this.signInClose = this.signInClose.bind(this)
    this.signInOpen = this.signInOpen.bind(this)
    this.signInSave = this.signInSave.bind(this)
    this.updateChanges = this.updateChanges.bind(this);
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
    alert(this.state.userName+this.state.password);
  }

  updateChanges(changedData) {
    this.setState(Object.assign(this.state, changedData))
  }

  render(){
    return (
      <span>
        <Modal modalWidth="25%" show={this.state.showSignInModal} title='Sign In' optionalBodyProp={this.updateChanges}
          body={SignInInput} actionText='Submit' closeHandler={this.signInClose} actionHandler={this.signInSave}  />
        <button type="button" className="btn btn-primary" onClick={this.signInOpen}>Sign In</button>
      </span>
    )
  }
}

export default SignIn;
