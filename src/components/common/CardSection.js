import React from 'react'
import { StyleSheet, View } from 'react-native'

const CardSection = ({ children, style }) => {
  return <View style={[styles.containerStyle, style]}>{children}</View>
}

const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
})

export { CardSection }
