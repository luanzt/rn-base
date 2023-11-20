import { useAppDispatch } from '@/hooks'
import { searchingVideo } from '@/services/apis/videos'
import { SearchItem, SearchResult } from '@/type'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'

const HomeView = () => {
  const dispatch = useAppDispatch()
  const [data, setData] = useState<SearchItem[]>([])

  useEffect(() => {
    dispatch(searchingVideo({ q: 'remix' })).then(res => {
      const searchResults: SearchResult = res.payload
      setData(searchResults.items)
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        renderItem={({ item }) => <Text>{item.id.videoId}</Text>}
        keyExtractor={item => item.id.videoId}
      />
    </SafeAreaView>
  )
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
