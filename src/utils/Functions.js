import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native'

export const getRequest = async (url, headers) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: headers
    })

    if (!response.ok) {
      console.log(await response.json())
      throw new Error('Network response was not ok')
    }

    // Handle the response data as needed
    const responseData = await response.json()
    console.log('GET request successful:', responseData)
    return await responseData

    // Optionally, perform additional actions based on the response
  } catch (error) {
    console.error('Error during GET request:', error)
    Alert.alert('Error', 'Failed to make GET request. Please try again.')
  }
}

export const postRequest = async (url, headers, postData) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(postData)
    })

    if (!response.ok) {
      console.log(await response.json())
      throw new Error('Network response was not ok')
    }

    // Handle the response data as needed
    const responseData = await response.json()
    console.log('POST request successful:', responseData)
    return responseData

    // Optionally, perform additional actions based on the response
  } catch (error) {
    console.error('Error during POST request:', error)
    Alert.alert(
      'Something went wrong',
      'Failed to make request. Check your internet connectivity or try again later.'
    )
  }
}

export const saveObject = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem(key, jsonValue)
    console.log(await AsyncStorage.getItem(key))
  } catch (error) {
    console.error('Error saving object to AsyncStorage:', error)
  }
}

export const getObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key)
    console.log(await AsyncStorage.getItem(key))
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (error) {
    console.error('Error retrieving object from AsyncStorage:', error)
  }
}

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
    console.log(await AsyncStorage.getItem(key))
  } catch (e) {
    console.log(e)
  }
}

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key)
    if (value !== null) {
      console.log(value)
      return value
    } else {
      console.log('The value is null')
    }
  } catch (e) {
    console.log(e)
  }
}
