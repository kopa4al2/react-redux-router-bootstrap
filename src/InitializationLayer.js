import React from 'react'
import { Router } from 'react-router-dom'
import browserHistory from 'utils/browserHistory'
import './normalize.css'

// I want to give React.lazy a chance, but it messes up my theming
// still can be done with a workaround but FB says its experimental
// const MainPage = React.lazy(() => import('pages/MainPage'))
// const RulesPage = React.lazy(() => import('pages/RulesPage'))

const InitializationLayer = () => (
  <React.StrictMode>
    <Router history={browserHistory}>
    </Router>
  </React.StrictMode>
)

export default InitializationLayer
