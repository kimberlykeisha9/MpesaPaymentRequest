import { getObject, getRequest, postRequest, storeData } from './Functions'
import { encode } from 'base-64'
import { CONSUMER_KEY, CLIENT_SECRET, SECURITY_CREDENTIAL } from '@env'

let consumerKey = CONSUMER_KEY
let clientSecret = CLIENT_SECRET
let securityCredential = SECURITY_CREDENTIAL

let secret = encode(consumerKey + ':' + clientSecret)

export const reversalRequest = async () => {
  try {
    let accessToken = await getMpesaSecret()

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${accessToken}`)
    const reversalData = await getObject('reversal')
    let body = {
      Initiator: 'test',
      SecurityCredential: securityCredential,
      CommandID: 'TransactionReversal',
      TransactionID: reversalData['transaction-id'],
      Amount: reversalData['amount'],
      ReceiverParty: reversalData['receiver'],
      RecieverIdentifierType: 11,
      ResultURL: 'https://mydomain.com/Reversal/result/',
      QueueTimeOutURL: 'https://mydomain.com/Reversal/queue/',
      Remarks: 'Test Remarks',
      Occassion: ''
    }

    let response = await postRequest(
      'https://sandbox.safaricom.co.ke/mpesa/reversal/v1/request',
      headers,
      body
    )
    return response
  } catch (error) {
    // Handle errors here
    console.error('Error in reversalRequest', error)
    Alert.alert('Error', 'Failed to get complete reversal. Please try again.')
    throw error // Optionally rethrow the error for further handling
  }
}

const getMpesaSecret = async () => {
  try {
    let headers = new Headers()
    headers.append('Authorization', `Basic ${secret}`)

    // Making the GET request using getRequest function
    let response = await getRequest(
      'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials',
      headers
    )

    // Storing the access_token using storeData function
    storeData('access_token', response['access_token'])

    // Returning the access_token
    return response['access_token']
  } catch (error) {
    // Handle errors here
    console.error('Error in getMpesaSecret:', error)
    Alert.alert('Error', 'Failed to get Mpesa secret. Please try again.')
    throw error // Optionally rethrow the error for further handling
  }
}
