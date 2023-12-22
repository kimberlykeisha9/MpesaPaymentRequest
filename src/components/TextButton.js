import { Pressable, Text, View } from 'react-native'
import { styles } from '../utils/Style'
import PropTypes from 'prop-types'

TextButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
}

export default function TextButton(props) {
  const { title, onPress, style } = props
  const { text } = styles
  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </Pressable>
    </View>
  )
}
