import React, { Component } from 'react'

const _ = require('lodash')

const logger = (event) => console.log('From modal component', event)

export class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    let Ecomponent = this.props.body;
    return (
      <div className="modal" style={this.props.show ? styles.displayOn: {}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" style={this.props.modalWidth ? {width: this.props.modalWidth}: {}} role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeHandler}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              <Ecomponent optionalMethod={this.props.optionalBodyProp} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.closeHandler}>Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.actionHandler}>{this.props.actionText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Modal.propTypes = {
  modalWidth: React.PropTypes.string.isRequired,
  show: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.func.isRequired,
  actionText: React.PropTypes.string.isRequired,
  closeHandler: React.PropTypes.func.isRequired,
  actionHandler: React.PropTypes.func.isRequired,
  optionalBodyProp: React.PropTypes.func
}

Modal.defaultProps = {
  show: false,
  title: '',
  body: () => <div>&nbsp;</div>,
  actionText: 'Save',
  closeHandler: logger,
  actionHandler: logger,
  modalWidth: ''
}

Modal.styles = {
  displayOn: {
    display: 'block',
  }
};

export default Modal;
