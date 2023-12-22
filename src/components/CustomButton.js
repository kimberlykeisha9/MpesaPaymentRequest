import React from 'react'
import { Text, Pressable, View } from 'react-native'
import { styles } from '../utils/Style'
import PropTypes from 'prop-types'

export default function CustomButton(props) {
  const { onPress, title, style } = props
  const { button, buttonText } = styles
  return (
    <View style={style}>
      <Pressable style={button} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </Pressable>
    </View>
  )
}

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func
}
