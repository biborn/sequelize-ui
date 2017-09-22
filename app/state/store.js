import {
  createStore,
  combineReducers,
  applyMiddleware,
  bindActionCreators
} from 'redux'
import thunk from 'redux-thunk'
import { rootReducer, actionCreators } from './branches'

let middleware = [thunk]
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger')
  middleware = [...middleware, logger]
}

const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(...middleware)
)

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('./branches', () => {
    const nextReducer = combineReducers(require('./branches').rootReducer)
    store.replaceReducer(nextReducer)
  });
}

const boundActions = Object.keys(actionCreators).reduce((acc, branch) => ({
  ...acc, [branch]: bindActionCreators(actionCreators[branch], store.dispatch)
}), {})

export { actionCreators, boundActions }
export default store
