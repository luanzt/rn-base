import React, { useState, useCallback } from 'react'
import { View, Alert, StyleSheet, Platform } from 'react-native'
import YoutubePlayer from 'react-native-youtube-iframe'

export default function PlayVideoView() {
  const [playing, setPlaying] = useState(false)

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false)
      Alert.alert('video has finished playing!')
    }
  }, [])

  return (
    <View>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={'BMEvL548CII'}
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
    </View>
  )
}

const styles = StyleSheet.create({
  webviewStyles: { opacity: 0.99 }
})
