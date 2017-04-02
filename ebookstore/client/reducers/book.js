const booksList = [
  {
    "title": "abcd",
    "author": "Aditya Gupta",
    "image": "https://media.logos.social/150x250/f06db8b6-8c85-4a89-9ee5-f2da56c05191.png",
    "description": "this%20%isawesomebookforchildrens",
    "createdAt": "2017-03-31T21:27:36.236Z",
    "updatedAt": "2017-03-31T21:27:36.236Z",
    "id": 1
  },
  {
    "title": "NetworkSecurityEssentialscdes",
    "author": "Gabbi Gupta",
    "image": "https://media.logos.social/150x250/f06db8b6-8c85-4a89-9ee5-f2da56c05191.png",
    "description": "this%20%isawesomebookfornetwork%20%professionals",
    "createdAt": "2017-03-31T21:28:10.464Z",
    "updatedAt": "2017-03-31T21:28:10.464Z",
    "id": 2
  }
];
export default function book(state = booksList, action) {
  switch(action.type) {
    case 'book/create':
      return [...state, Object.assign({}, action.book)]
    default:
      return state;
  }
}
