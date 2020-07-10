import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'
import { CardSection, Input } from './common'
import { connect } from 'react-redux'
import { employeeUpdate } from '../actions'
class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label='Name'
            value={this.props.name}
            onChangeText={(text) =>
              this.props.employeeUpdate({ prop: 'name', value: text })
            }
            placeholder='James'
          />
        </CardSection>
        <CardSection>
          <Input
            value={this.props.phone}
            label='Phone'
            placeholder='555-555-5555'
            onChangeText={(text) =>
              this.props.employeeUpdate({ prop: 'phone', value: text })
            }
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <View
            style={{
              justifyContent: 'flex-start',
              flexDirection: 'row',
              position: 'relative',
              paddingLeft: 15,
              paddingRight: 15
            }}
          >
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.props.shift}
              onValueChange={(value) =>
                this.props.employeeUpdate({ prop: 'shift', value })
              }
            >
              <Picker.Item label='Monday' value='Monday' />
              <Picker.Item label='Tuesday' value='Tuesday' />
              <Picker.Item label='Wednesday' value='Wednesday' />
              <Picker.Item label='Thursday' value='Thursday' />
              <Picker.Item label='Friday' value='Friday' />
              <Picker.Item label='Saturday' value='Saturday' />
              <Picker.Item label='Sunday' value='Sunday' />
            </Picker>
          </View>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm
  return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm)
