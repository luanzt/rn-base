import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { navigateAndSimpleReset } from '@/Navigators/utils'
import { SvgXml } from 'react-native-svg'
import { Icons } from '@/Assets'

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
      <SvgXml xml={Icons.Logo} height={140} width={140} />
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
