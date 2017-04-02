export default function auth(state = [], action) {
  switch(action.type) {
    case 'user/create':
      return [...state, Object.assign({}, action.user)]
    default:
      return state;
  }
}
