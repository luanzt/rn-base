import React, { useEffect, useState } from 'react'
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Image
} from 'react-native'
import { Colors } from '@/Constants'
import * as trendingActions from '@/Services/apis/trending'
import { useAppDispatch } from '@/Hooks'

type itemProps = {
  movie: MovieState
}

export type MovieState = {
  id: number
  title: String | null
  name: String | null
  original_title: String | null
  overview: String
  vote_average: number
  poster_path: String | null
  backdrop_path: String | null
}
const TrendingView = (_props: any) => {
  const [list, setList] = useState([])

  const dispatch = useAppDispatch()
  const renderItem = (item: MovieState) => {
    const {
      title,
      name,
      original_title,
      overview,
      vote_average,
      poster_path,
      backdrop_path
    } = item
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original/${
                poster_path || backdrop_path || ''
              }`
            }}
            style={styles.image}
          />
          <View style={styles.info}>
            <Text style={styles.title}>{title || name || original_title}</Text>
            <Text style={styles.overview}>Rating: {vote_average}</Text>
            <Text style={styles.overview}>{overview}</Text>
          </View>
        </View>
      </View>
    )
  }
  useEffect(() => {
    dispatch(trendingActions.getList()).then((res: any) => {
      setList(res.payload.results)
    })
  }, [dispatch])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={list}
        renderItem={({ item }: any) => renderItem(item)}
        keyExtractor={(item: any) => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9e9e9'
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    flexDirection: 'row'
  },
  title: {
    fontSize: 20,
    color: Colors.black
  },
  overview: {
    marginVertical: 5,
    fontSize: 15
  },
  image: {
    flex: 1,
    width: 100,
    height: 200
  },
  info: {
    flex: 2,
    marginLeft: 8
  }
})

export default TrendingView
