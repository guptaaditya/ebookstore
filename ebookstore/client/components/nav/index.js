import React, { Component } from 'react'

const _ = require('lodash')

import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render(){
    let styles = _.cloneDeep(this.constructor.styles);
    return (
      <div className={this.props.className} style={styles.gap}>
        <span className="glyphicon glyphicon-book" style={styles.shopIco}>&nbsp;&nbsp;</span>
        <NavLink exact to="/" activeClassName="text-muted">Shop</NavLink>

        &nbsp;&nbsp;|&nbsp;&nbsp;
        <span className="glyphicon glyphicon-shopping-cart" style={styles.shopIco}>&nbsp;&nbsp;</span>
        <NavLink to="/checkout" activeClassName="text-muted">Checkout</NavLink>
      </div>
    )
  }
};

Nav.styles = {
  shopIco: {
    width: '20px',
    color: '#fff'
  },
  gap: {
    paddingTop: '5px',
    textDecoration: 'none'
  }
};

export default Nav;
