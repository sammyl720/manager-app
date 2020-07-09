import React from 'react'
import { StyleSheet, ActivityIndicator, View } from 'react-native'

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { Spinner }
