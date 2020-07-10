import React, { Component } from 'react'
import { Card, CardSection, Button, Confirm } from './common'
import { textWithoutEncoding } from 'react-native-communications'
import _ from 'lodash'
import { employeeUpdate, employeeSave, employeeDelete } from '../actions'
import { connect } from 'react-redux'
import EmployeeForm from './EmployeeForm'

export class EmployeeEdit extends Component {
  state = {
    showModal: false
  }
  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onTextPress() {
    const { phone, shift } = this.props
    const message = `Your upcoming shift is on ${shift}`
    textWithoutEncoding(phone, message)
  }

  onButtonPress() {
    const { name, phone, shift } = this.props
    const { uid } = this.props.employee
    this.props.employeeSave({
      name,
      phone,
      shift,
      uid
    })
  }

  onAccept() {
    const { uid } = this.props.employee
    this.props.employeeDelete({ uid })
  }

  onDecline() {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>Text Schedule </Button>
        </CardSection>
        <CardSection>
          <Button
            onPress={() => {
              this.setState({ showModal: !this.state.showModal })
            }}
          >
            Fire Employee
          </Button>
        </CardSection>
        <Confirm
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
          visible={this.state.showModal}
        >
          Are you sure you want to delete this
        </Confirm>
      </Card>
    )
  }
}
const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm

  return { name, phone, shift }
}

export default connect(mapStateToProps, {
  employeeUpdate,
  employeeSave,
  employeeDelete
})(EmployeeEdit)
