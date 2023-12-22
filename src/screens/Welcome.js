import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput } from 'react-native'
import CustomButton from '../components/CustomButton'
import React, { useState, useEffect } from 'react'
import { styles } from '../utils/Style'
import { getData, storeData } from '../utils/Functions'
import TextButton from '../components/TextButton'

export default function Welcome({ navigator }) {
  const [name, setName] = useState('')
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedName = await getData('name')
        setName(storedName !== null ? storedName : '')
      } catch (error) {
        console.error('Error retrieving data:', error)
      }
    }

    retrieveData()
  }, [])
  const { container, title, text, padding, input, skipButton } = styles
  const handleContinue = () => {
    storeData('name', name)
    navigator.navigate('Transaction Loader')
  }
  return (
    <View style={[container, padding]}>
      <StatusBar style="auto" />
      <TextButton style={skipButton} text="SKIP" />
      <Text style={title}>Hello User</Text>
      <View style={{ marginTop: 20 }} />
      <Text style={text}>
        Welcome to my application that handles M-Pesa transactions
      </Text>
      <View style={{ marginTop: 10 }} />
      <Text style={text}>Let me know your name so we can continue</Text>
      <View style={{ marginTop: 40 }} />
      <TextInput
        style={input}
        placeholder="First name"
        onChangeText={setName}
        value={name}
      />
      <View style={{ marginTop: 50 }} />
      <CustomButton title="CONTINUE" onPress={handleContinue} />
    </View>
  )
}
