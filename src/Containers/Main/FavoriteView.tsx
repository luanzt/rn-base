import React, { useEffect, useState } from 'react'
import {
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { Colors } from '@/Constants'

import * as favoriteActions from '@/Services/apis/favorite'
import * as markActions from '@/Services/apis/mark'
import { useAppDispatch } from '@/Hooks'
import { connect } from 'react-redux'

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

const FavoriteView = (props: any) => {
  const [list, setList] = useState<MovieState[]>([])

  const dispatch = useAppDispatch()

  useEffect(() => {
    getListFavorite()
  })

  const getListFavorite = () => {
    dispatch(favoriteActions.getList(props.account_id, props.session_id)).then(
      (res: any) => {
        setList(res.payload.results)
      }
    )
  }
  const removeFavorite = (item: MovieState) => {
    // list.map((item: MovieState) => {
    dispatch(
      markActions.markAsFavorite(props.account_id, props.session_id, {
        media_type: 'movie',
        media_id: item.id,
        favorite: false
      })
    )

    // })
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
              <Text style={styles.fav}>Remove From My Favorite</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

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
const mapStatesToProps = (state: any) => {
  return {
    session_id: state.user.session_id,
    account_id: state.user.id
  }
}

const mapDispatchToProps = (_dispatch: any) => {
  return {}
}
export default connect(mapStatesToProps, mapDispatchToProps)(FavoriteView)
