import { createStore } from 'redux'
import { rootReducer } from '../reducers/'

export default storeConfigurer(initState){
  return createStore(
    rootReducer,
    initState
  )
}
