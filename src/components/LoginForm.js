import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Header } from './common'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Alert } from 'react-native'

class LoginForm extends Component {
  onEmailChange(text) {
    // console.log('change text', text)
    this.props.emailChanged(text)
  }
  onPasswordChange(text) {
    // console.log('change text', text)
    this.props.passwordChanged(text)
  }

  render() {
    console.log(this.props)
    return (
      <Card>
        <Header headerText='Login to Manager App' />
        <CardSection>
          <Input
            value={this.props.auth.email}
            onChangeText={this.onEmailChange.bind(this)}
            label='Email'
            placeholder='user@gmail.com'
          />
        </CardSection>
        <CardSection>
          <Input
            label='Password'
            secureTextEntry
            value={this.props.auth.password}
            placeholder='password'
            onChangeText={this.onPasswordChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(LoginForm)
