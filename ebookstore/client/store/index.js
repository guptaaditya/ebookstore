import { createStore } from 'redux'
import rootReducer from '../reducers/'

export default function storeConfigurer(initState){
  return createStore(
    rootReducer,
    initState
  )
}
