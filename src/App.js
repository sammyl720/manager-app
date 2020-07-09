import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'
import config from './config'
export default class App extends Component {
  componentDidMount() {
    const config = 

    if (!firebase.apps.length) {
      firebase.initializeApp(config)
    }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}
