import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { CardSection } from './common'
const ListItem = ({ employee }) => {
  const { name } = employee
  const onRowPress = () => {
    Actions.employeeEdit({ employee })
  }
  return (
    <TouchableOpacity onPress={onRowPress}>
      <View>
        <CardSection style={{}}>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableOpacity>
  )
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}
export default ListItem
