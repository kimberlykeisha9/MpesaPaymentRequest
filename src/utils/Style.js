import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 20
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
    fontSize: 20,
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
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 2,
    width: '100%',
    height: 60,
    paddingHorizontal: 20
  }
})
