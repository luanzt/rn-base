import React, { useEffect, useState } from 'react'
import { Text, SafeAreaView, FlatList, StyleSheet, View } from 'react-native'
import * as genreActions from '@/Services/apis/genres'
import { useAppDispatch } from '@/Hooks'

const Item = ({ title }: any) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)
const GenreView = (_props: any) => {
  const [list, setList] = useState([])

  const dispatch = useAppDispatch()
  const renderItem = ({ item }: any) => {
    return <Item title={item.name} />
  }
  useEffect(() => {
    dispatch(genreActions.getList()).then((res: any) => {
      setList(res.payload.genres)
    })
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
})

export default GenreView
