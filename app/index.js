import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'

import { store } from 'state'
import { history, routes } from 'routing'
import Root from './Root'
import 'theme/global.css'

const rootDiv = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store} history={history} routes={routes} />
  </AppContainer>,
  rootDiv
)

if (module.hot) {
  module.hot.accept('./Root', () => {
    const newRoutes = require('routing').routes
    render(
      <AppContainer>
        <Root store={store} history={history} routes={newRoutes} />
      </AppContainer>,
      rootDiv
    )
  });
}
