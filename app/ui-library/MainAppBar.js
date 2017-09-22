import React from 'react'
import PropTypes from 'prop-types'
import AppBar from 'react-toolbox/lib/app_bar'

const MainAppBar = (props, { history }) => (
  <AppBar
    title='Sequelize UI'
    flat
    leftIcon='star'
    onLeftIconClick={() => history.push('/')}
    {...props}
  />
)

MainAppBar.contextTypes = { history: PropTypes.object }
export default MainAppBar

