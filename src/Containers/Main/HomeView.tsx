import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { useAppDispatch, useAppSelector } from '@/Hooks'

const HomeView = () => {
  const dispatch = useAppDispatch()

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
