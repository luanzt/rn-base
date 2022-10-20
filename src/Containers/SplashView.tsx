import React, { useEffect } from 'react'
import { ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import { navigateAndSimpleReset } from '@/Navigators/utils'

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
      <ActivityIndicator size={'large'} color="white" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default SplashView
