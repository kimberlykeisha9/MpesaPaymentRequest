import Welcome from './src/screens/Welcome'
import 'react-native-gesture-handler'
import { Text, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './src/utils/Style'

const Stack = createStackNavigator()

export default function App() {
  const { text } = styles
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          headerRight={() => (
            <Pressable>
              <Text style={text}>Skip</Text>
            </Pressable>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
