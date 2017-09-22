import React from 'react'
import { Demo, ErrorView, Home } from 'views'
import { boundActions } from 'state'

export default [
  {
    path: '/demo',
    action: () => {
      boundActions.demo.incrementCounter()
      return  <Demo />
    }
  },
  {
    path: '/error',
    action: ({ error }) => <ErrorView error={error} />
  },
  {
    path: '/',
    action: () => <Home />
  }
]
