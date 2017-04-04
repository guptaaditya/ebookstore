export default function book(state = [], action) {
  debugger;
  switch(action.type) {
    case 'book/create':
      return [...state, Object.assign({}, action.book)]
      break;
    case 'book/search':
      return [...state, Object.assign({}, action.book)]
      break;
    case 'GET_BOOKS_SUCCESS':
      return [...action.books]
      break;

    default:
      return state;
  }
}
