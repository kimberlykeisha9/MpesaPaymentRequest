import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { styles } from '../utils/Style'

export default function CustomButton(props) {
  const { onPress, title } = props
  const { button, buttonText } = styles
  return (
    <Pressable style={button} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </Pressable>
  )
}
