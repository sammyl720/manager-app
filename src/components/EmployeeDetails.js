import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, CardSection } from './common'

const EmployeeDetails = ({ employee }) => {
  return (
    <Card>
      <CardSection>
        <Text>{employee.name}</Text>
      </CardSection>
      <CardSection>
        <Text>{employee.phone}</Text>
      </CardSection>
      <CardSection>
        <Text>{employee.shift}</Text>
      </CardSection>
    </Card>
  )
}

export default EmployeeDetails

const styles = StyleSheet.create({})
