import { Text, View, FlatList } from 'react-native'
import { styles } from '../utils/Style'
import React, { useState, useEffect } from 'react'
import { getData } from '../utils/Functions'
import TransactionItem from '../components/TransactionItem'
import { transactionTypes } from '../utils/TransactionTypes'

export default function TransactionLoader() {
  const { container, padding, text, title } = styles
  const [name, setName] = useState('User')
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const storedName = await getData('name')
        setName(storedName !== null ? storedName : 'User')
      } catch (error) {
        console.error('Error retrieving data:', error)
      }
    }

    retrieveData()
  }, [])
  const renderItem = ({ item }) => <TransactionItem item={item} />
  return (
    <View style={[container, padding]}>
      <Text style={title}>Hello {name}</Text>
      <View style={{ marginTop: 10 }} />
      <Text style={text}>
        Select the type of transaction you would like to initiate
      </Text>
      <View style={{ marginTop: 10 }} />
      <FlatList
        data={transactionTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
      />
    </View>
  )
}


