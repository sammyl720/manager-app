import React from 'react'
import { View, Text } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import LoginForm from './components/LoginForm'
import EmployeeCreate from './components/EmployeeCreate'
import EmployeeList from './components/EmployeeList'
import EmployeeEdit from './components/EmployeeEdit'
const router = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' component={LoginForm} title='Please Login' />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='Add'
            onRight={() => Actions.employeeCreate()}
            key='employeeList'
            component={EmployeeList}
            title='Employees'
          />
          <Scene
            key='employeeCreate'
            component={EmployeeCreate}
            title='Add Employee'
          />
          <Scene
            key='employeeEdit'
            component={EmployeeEdit}
            title='Edit Employee'
          />
        </Scene>
      </Scene>
    </Router>
  )
}

export default router
