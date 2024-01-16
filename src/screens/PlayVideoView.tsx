import { SearchItem } from '@/type'
import React, { useState, useCallback } from 'react'
import { Alert, StyleSheet, Platform, SafeAreaView } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function PlayVideoView({ route }) {
  const video: SearchItem = route.params.videoItem
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  return (
    <SafeAreaView>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={video.id.videoId}
        onChangeState={onStateChange}
        webViewStyle={styles.webviewStyles}
        webViewProps={{
          androidLayerType:
            Platform.OS === 'android' && Platform.Version <= 22
              ? 'hardware'
              : 'none',
          renderToHardwareTextureAndroid: true
        }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  webviewStyles: { opacity: 0.99 }
})
