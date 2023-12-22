import Welcome from './src/screens/Welcome'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TransactionLoader from './src/screens/TransactionLoader'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
        <Stack.Screen name="Transaction Loader" component={TransactionLoader} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
