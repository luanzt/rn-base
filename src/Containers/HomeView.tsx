import React, { useState, useEffect } from 'react'
import { Text, SafeAreaView } from 'react-native'
import { useAppDispatch, useAppSelector, useTheme } from '@/Hooks'
import { useLazyFetchUsersQuery } from '@/Services/modules/users'

const HomeView = () => {
  const { Layout } = useTheme()
  const dispatch = useAppDispatch()

  const [fetchUsers, { data, isFetching, isError }] = useLazyFetchUsersQuery()

  useEffect(() => {
    fetchUsers(123)
  })

  return (
    <SafeAreaView style={Layout.fill}>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default HomeView
