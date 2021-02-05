import React, { Component, Fragment } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './components/users/Dashboard';

import {Provider} from 'react-redux';
import store from './store';

import './default.css';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            
            <Route exact path="/" component = {Dashboard} />
          
          </Switch>
        </Fragment>
      </Router>
      </Provider>
    )
  }
}

export default App

