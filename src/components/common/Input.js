import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{ label }</Text>
      <TextInput
        autoCorrect={false}
        autoComplete='email'
        style={styles.inputStyle}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
})

export { Input }
