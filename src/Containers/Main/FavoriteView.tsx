import React, { useEffect, useState } from 'react'
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import { Colors, Texts } from '@/Constants'

import * as favoriteActions from '@/Services/apis/favorite'
import * as markActions from '@/Services/apis/mark'
import { useAppDispatch, useAppSelector } from '@/Hooks'

import { MovieState } from '@/Type'

const FavoriteView = () => {
  const [refreshing, setRefreshing] = useState(false)
  const dispatch = useAppDispatch()
  const sessionId = useAppSelector(state => state.user.sessionId)
  const accountId = useAppSelector(state => state.user.id)
  const results = useAppSelector(state => state.favorite.results)
  const onRefresh = () => {
    setRefreshing(true)

    dispatch(favoriteActions.getList(accountId, sessionId)).then(() => {
      setRefreshing(false)
    })
  }

  const removeFavorite = (item: MovieState) => {
    dispatch(
      markActions.markAsFavorite(
        accountId,
        sessionId,
        {
          media_type: 'movie',
          media_id: item.id,
          favorite: false
        },
        item
      )
    )
  }
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
            <TouchableOpacity
              onPress={() => removeFavorite(item)}
              style={styles.button}
            >
              <Text style={styles.fav}>{Texts.removeFavorite}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
  useEffect(() => {
    dispatch(favoriteActions.getList(accountId, sessionId))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={results}
        renderItem={({ item }: any) => renderItem(item)}
        keyExtractor={(item: MovieState, index: number) => `${index}`}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={Colors.fav_button}
          />
        }
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
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: Colors.fav_button,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  fav: {
    color: Colors.primary,
    fontWeight: 'bold',
    fontSize: 15
  }
})

export default FavoriteView
