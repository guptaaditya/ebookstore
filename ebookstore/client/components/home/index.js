import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as bookActions from '../../actions/book'
import BookList from '../bookList/'
import SearchBox from '../searchBox/'

export class Home extends Component {
  constructor(props){
    super(props)
    this.searchBooks = this.searchBooks.bind(this)
  }

  searchBooks(term){
    if(term.trim())
      this.props.actions.searchBook(term)
    else
      this.props.actions.getAllBooks()
  }

  render(){
    return (
      <div className="container">
        <SearchBox search={this.searchBooks} />
        <BookList books={this.props.books} />
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => { return {books: state.books}}
const mapDispatchToProps = (dispatch) => { return {actions: bindActionCreators(bookActions, dispatch)}}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
