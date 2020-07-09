import React from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} color='black' />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  }
})

export { Spinner }
