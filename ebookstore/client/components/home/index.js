import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookList from '../bookList/'

export class Home extends Component {
  render(){
    return (
      <BookList books={this.props.books} />
    )
  }
};

const mapStateToProps = (state, ownProps) => { return {books: state.books}}
export default connect(mapStateToProps)(Home);
