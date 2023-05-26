import React, { useEffect } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { navigateAndSimpleReset } from '@/navigators/NavigationHelpers'

const SplashView = () => {
  const init = async () => {
    await new Promise(resolve =>
      setTimeout(() => {
        resolve(true)
      }, 2000)
    )
    navigateAndSimpleReset('Login')
  }

  useEffect(() => {
    init()
  })

  return (
    <View style={styles.container}>
      <Text>SPLASH SCREEN</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  }
})

export default SplashView
