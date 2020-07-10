import React, { Component } from 'react'
import { employeesFetch } from '../actions'
import { View, FlatList } from 'react-native'
import _ from 'lodash'
import ListItem from './ListItem'
import { connect } from 'react-redux'
class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch()
  }

  renderEmployees() {
    const { employees } = this.props

    return (
      <FlatList
        keyExtractor={(item) => item.uid}
        data={employees}
        renderItem={({ item }) => {
          return <ListItem employee={item} />
        }}
      />
    )
  }

  render() {
    return <View>{this.renderEmployees()}</View>
  }
}

const mapStateToProps = (state) => {
  return {
    employees: _.map(state.employees, (val, uid) => {
      return { ...val, uid }
    })
  }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
