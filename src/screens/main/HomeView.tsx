import { useAppDispatch } from '@/hooks'
import { navigate } from '@/navigators/NavigationHelpers'
import { searchingVideo } from '@/services/apis/videos'
import { SearchItem, SearchResult } from '@/type'
import React, { useCallback, useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions
} from 'react-native'

const HomeView = () => {
  const dispatch = useAppDispatch()
  const [data, setData] = useState<SearchItem[]>([])
  const layout = useWindowDimensions()
  const witdhVideo = layout.width / 2 - 20

  useEffect(() => {
    dispatch(searchingVideo({ q: 'remix' })).then(res => {
      const searchResults: SearchResult = res.payload
      setData(searchResults.items)
    })
  }, [])

  const handleNavigateToPlayVideo = (videoItem: SearchItem) => {
    navigate('PlayVideo', { videoItem })
  }

  const renderItem = useCallback(
    ({ item }: { item: SearchItem }) => {
      const { snippet } = item
      return (
        <TouchableOpacity
          style={styles.videoItem}
          onPress={() => handleNavigateToPlayVideo(item)}
        >
          <Image
            source={{ uri: snippet.thumbnails.medium.url }}
            style={{ width: witdhVideo, height: witdhVideo * 0.6 }}
          />
          <Text style={styles.channelText}>{snippet.channelTitle}</Text>
          <Text style={styles.videoTitle}>{snippet.title}</Text>
        </TouchableOpacity>
      )
    },
    [layout]
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.videoId}
      />
    </SafeAreaView>
  )
}

export default HomeView

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoItem: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10
  },
  thumbnail: {
    width: 120,
    height: 90
  },
  videoTitle: {
    marginTop: 5,
    fontSize: 13,
    color: '#333'
  },
  channelText: {
    marginTop: 10,
    fontSize: 14,
    color: '#000',
    fontWeight: '600'
  }
})
