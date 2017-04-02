import { combineReducers } from 'redux'
import auths from './auth'
import books from './book'

const rootReducer = combineReducers({
  auths,
  books
})

export default rootReducer
