import React, { Component } from 'react'

const _ = require('lodash')

export class Modal extends Component {
  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    return (
      <div className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.title}</h4>
            </div>
            <div className="modal-body">
              {this.props.body}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={this.props.actionHandler()}>{this.props.actionText}</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

Modal.propTypes = {
  title: React.PropTypes.string.isRequired,
  body: React.PropTypes.element.isRequired,
  actionText: React.PropTypes.string.isRequired,
  actionHandler: React.PropTypes.func.isRequired
}

Modal.defaultProps = {
  title: '',
  body: <div>&nbsp;Hi&nbsp;</div>,
  actionText: 'Save',
  actionHandler: () => console.log('Default action handler')
}

Modal.styles = {
  gap: {
    paddingTop: '5px',
    textDecoration: 'none'
  }
};

export default Modal;
