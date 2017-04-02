const users = [{id: 1, name: 'aditya'}];
export default function auth(state = users, action) {
  switch(action.type) {
    case 'user/create':
      return [...state, Object.assign({}, action.user)]
    default:
      return state;
  }
}
