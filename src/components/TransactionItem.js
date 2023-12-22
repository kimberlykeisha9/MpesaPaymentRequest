import { Text, View, Pressable, FlatList, TextInput, Alert } from 'react-native'
import { styles } from '../utils/Style'
import Modal from 'react-native-modal'
import React, { useState } from 'react'
import CustomButton from './CustomButton'
import TextButton from './TextButton'
import { saveObject } from '../utils/Functions'
import { getMpesaSecret, reversalRequest } from '../utils/MpesaRequests'

export default function TransactionItem(props) {
  const { item } = props
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [inputValues, setInputValues] = useState({})

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  const handleInputChange = (type, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [type]: value
    }))
  }

  const { text, listItem, dialogStyle, input } = styles

  const renderInput = ({ item }) => (
    <TextInput
      onChangeText={(text) => handleInputChange(item.type, text)}
      onBlur={validateInputs}
      style={[input, { marginTop: 10 }]}
      value={inputValues[item.type] || ''}
      placeholder={item.display}
    />
  )

  const handleContinue = async () => {
    if (validateInputs()) {
      console.log('Input values:', inputValues)
      saveObject(item.type, inputValues)
      await item.function
      setInputValues({})
      toggleModal()
    } else {
      Alert.alert('Validation Error', 'Please check that everything is valid.')
    }
  }

  const validateInputs = () => {
    // Implement your validation logic here
    for (const param of item.params) {
      if (!inputValues[param.type]) {
        return false // Validation failed if any field is empty
      }
      if (param.requireNumeric && isNaN(Number(inputValues[param.type]))) {
        return false // Validation failed if the value is not a number
      }
    }
    return true // All fields are filled
  }

  return (
    <View>
      <Pressable onPress={toggleModal}>
        <View style={listItem}>
          <Text style={text}>{item.display}</Text>
          <Text style={{ textAlign: 'center' }}>{item.description}</Text>
        </View>
      </Pressable>
      <Modal isVisible={isModalVisible}>
        <View style={dialogStyle}>
          <Text style={text}>{item.display}</Text>
          <View style={{ marginTop: 10 }} />
          <Text style={{ textAlign: 'center' }}>{item.instruction}</Text>
          <View style={{ marginTop: 10 }} />
          <FlatList
            data={item.params}
            renderItem={renderInput}
            keyExtractor={(item) => item.type}
          />
          <View style={{ marginTop: 20 }} />
          <CustomButton onPress={handleContinue} title="CONTINUE" />
          <View style={{ marginTop: 10 }} />
          <TextButton onPress={toggleModal} title="Cancel Request" />
        </View>
      </Modal>
    </View>
  )
}
