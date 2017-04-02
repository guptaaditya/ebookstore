import React, { Component } from 'react'
import BookCard from '../bookCard/'

export class BookList extends Component {
  render(){
    let books = this.props.books.map((book, index) => {
      return <BookCard key={index} title={book.title} image={book.image} author={book.author} />
    });
    return (
      <div className="container" style={{padding: '1%'}}>
        {books}
      </div>
    )
  }
};

export default BookList;
