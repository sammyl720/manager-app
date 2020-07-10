import React, { Component } from 'react'
import { employeeUpdate, employeeCreate } from '../actions'
import EmployeeForm from './EmployeeForm'
import _ from 'lodash'
import { Card, CardSection, Button } from './common'
import { connect } from 'react-redux'
export class EmployeeCreate extends Component {
  componentDidMount() {
    _.each({ name: '', phone: '', shift: 'Monday' }, (value, prop) => {
      this.props.employeeUpdate({ prop, value })
    })
  }

  onButtonPress() {
    const { name, phone, shift } = this.props

    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' })
  }

  render() {
    // console.log(this.props.employee)
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>Save</Button>
        </CardSection>
      </Card>
    )
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}
export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(
  EmployeeCreate
)
