export default function auth(state, action){
  swicth(action.type){
    case 'user/create':
      return [...state, Object.assign({}, action.user)]
    default:
      return state;
  }
}
