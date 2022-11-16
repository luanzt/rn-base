import React from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'

const HomeView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default HomeView
