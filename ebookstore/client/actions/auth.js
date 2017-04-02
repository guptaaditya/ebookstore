export default function signUp(user){
  return {type: 'user/create', user}
}

export default function addBook(book){
  return {type: 'book/create', book}
}
