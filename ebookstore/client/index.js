import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import RoutesList from './routes/';
import storeConfigurer from './store/'
import getAllBooks from './actions/book'
const store = storeConfigurer()
store.dispatch(getAllBooks())

ReactDOM.render(
  <Provider store={store}>
    <RoutesList />
  </Provider>,
  document.getElementById('onlyelement')
)
