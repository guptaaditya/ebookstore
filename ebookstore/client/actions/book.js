export function addBook(book){
  return {type: 'book/create', book}
}

export function getBooksSuccess(books){
  return {type: 'GET_BOOKS_SUCCESS', books}
}

export function searchBook(term){
  return (dispatch) => {
    return fetch('http://localhost:1337/book/search?term='+term)
      .then((response) => {
        return response.json();
      }).then((books) => {
        dispatch(getBooksSuccess(books))
      })
  }
}

export default function getAllBooks(){
  return (dispatch) => {
    return fetch('http://localhost:1337/book/')
      .then((response) => {
        return response.json();
      }).then((books) => {
        dispatch(getBooksSuccess(books))
      })
  }
}
