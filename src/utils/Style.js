import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 500,
    backgroundColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  dialogStyle: {
    padding: 20,
    maxWidth: 500,
    alignSelf: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 20
  },
  listItem: {
    padding: 20,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10,
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  padding: {
    padding: 20
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    fontSize: 16,
    borderColor: 'black',
    borderWidth: 1,
    width: '100%',
    height: 60,
    paddingHorizontal: 20
  }
})
