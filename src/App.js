import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RootStore from './stores/RootStore'
import { Provider } from 'mobx-react'

// Pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Loading from './pages/Loading'
import Profile from './pages/Profile'
import editProfile from './pages/editProfile'

class App extends Component {
  state = { loading: true }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    return this.state.loading? <Loading message='Preparing the app..'/> : (
      <Provider store={RootStore}>
        <Router>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/editprofile' component={editProfile}/>
            <Route path='/loading' component={Loading} />
            <Route path='*' component={Dashboard} />
          </Switch>
        </Router>
      </Provider>
      
    )
  }
}

export default App
