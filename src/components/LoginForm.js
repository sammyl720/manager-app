import React, { Component } from 'react'
import { Card, CardSection, Input, Button, Header, Spinner } from './common'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Alert } from 'react-native'

class LoginForm extends Component {
  onEmailChange(text) {
    // console.log('change text', text)
    this.props.emailChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props.auth
    this.props.loginUser({ email, password })
  }

  onPasswordChange(text) {
    // console.log('change text', text)
    this.props.passwordChanged(text)
  }

  renderButton() {
    if (this.props.auth.loading) {
      return <Spinner size='large' />
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
    }
  }

  renderError() {
    if (this.props.auth.error) {
      return (
        <View style={{ background: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.auth.error}</Text>
        </View>
      )
    }
  }

  render() {
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
        {this.renderError()}
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, actions)(LoginForm)
