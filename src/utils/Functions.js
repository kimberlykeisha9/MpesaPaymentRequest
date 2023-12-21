import AsyncStorage from '@react-native-async-storage/async-storage'

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
      return value;
    } else {
      console.log('The value is null')
    }
  } catch (e) {
    console.log(e)
  }
}
