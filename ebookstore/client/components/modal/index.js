import React, { Component } from 'react'

const _ = require('lodash')

const logger = (event) => console.log(event)

export class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    let component = this.props.body;
    return (
      <div className="modal" style={this.props.show ? styles.displayOn: {}} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.closeHandler}><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              <component />
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
  show: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.func.isRequired,
  actionText: React.PropTypes.string.isRequired,
  closeHandler: React.PropTypes.func.isRequired,
  actionHandler: React.PropTypes.func.isRequired,
}

Modal.defaultProps = {
  show: false,
  title: '',
  body: () => <div>&nbsp;</div>,
  actionText: 'Save',
  closeHandler: logger,
  actionHandler: logger,
}

Modal.styles = {
  displayOn: {
    display: 'block',
  }
};

export default Modal;
