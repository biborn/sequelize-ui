import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'routing'

const Root = ({ store, history, routes }) => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

export default Root

