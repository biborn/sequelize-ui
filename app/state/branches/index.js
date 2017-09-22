import demo from './demo'

const branches = {
  demo
}

const createReducer = ({ initialState, handler }) =>
 (state = initialState, action) => (
   handler[action.type] ? handler[action.type](state, action) : state
 )

export const rootReducer  = Object.keys(branches).reduce((acc, branch) => {
  const { initialState, handler } = branches[branch]
  return { ...acc, [branch]: createReducer({ initialState, handler }) }
}, {})

export const actionCreators = Object.keys(branches).reduce((acc, branch) => {
  const { actionCreators } = branches[branch]
  return { ...acc, [branch]: actionCreators }
}, {})

