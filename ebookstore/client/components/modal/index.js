import React, { Component } from 'react'

const _ = require('lodash')

export class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: props.show || false,
    }
    this.close = this.close.bind(this)
  }

  close() {
    this.setState({show: false});
  }

  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    return (
      <div className="modal" style={this.state.show ? styles.displayOn: {}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.close}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.actionHandler}>{this.props.actionText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Modal.propTypes = {
  show: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.element.isRequired,
  actionText: React.PropTypes.string.isRequired,
  actionHandler: React.PropTypes.func.isRequired
}

Modal.defaultProps = {
  show: true,
  title: '',
  body: <div>&nbsp;Hi&nbsp;</div>,
  actionText: 'Save',
  actionHandler: () => console.log(this.props)
}

Modal.styles = {
  displayOn: {
    display: 'block',
  }
};

export default Modal;
