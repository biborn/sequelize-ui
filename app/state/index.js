import { connect } from 'react-redux'
import store, { actionCreators, boundActions } from './store'

const allActions = Object.values(actionCreators).reduce((acc, curr) => ({
  ...acc, ...curr
}), {})

const connectAll = connect(state => state, allActions)
export { store, actionCreators, boundActions,  connectAll }
