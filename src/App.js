import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import ReduxThunk from 'redux-thunk'
import config from './config' // ? create a config folder with an index file that export default config for firebase

export default class App extends Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}
