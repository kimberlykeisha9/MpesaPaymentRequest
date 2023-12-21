import { StatusBar } from 'expo-status-bar'
import { Text, View, TextInput, Pressable } from 'react-native'
import CustomButton from '../components/CustomButton'
import React, { useState, useEffect } from 'react'
import { styles } from '../utils/Style'
import { getData, storeData } from '../utils/Functions'

export default function Welcome() {
  const [name, onChangeName] = useState('')
  const [fetchedName, setFetchedName] = useState('')
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedName = await getData('name')
        onChangeName(storedName !== null ? storedName : '')
        setFetchedName(storedName !== null ? storedName : '')
      } catch (error) {
        console.error('Error retrieving data:', error)
      }
    }

    retrieveData()
  }, [])
  const { container, title, text, padding, input, skipButton } = styles
  return (
    <View style={[container, padding]}>
      <StatusBar style="auto" />
      
      <Text style={title}>Hello {fetchedName}</Text>
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
        onChangeText={onChangeName}
        value={name}
      />
      <View style={{ marginTop: 50 }} />
      <CustomButton title="CONTINUE" onPress={() => storeData('name', name)} />
    </View>
  )
}
