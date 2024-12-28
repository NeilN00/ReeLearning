import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Video, {VideoRef} from 'react-native-video';

const VideoComponent = () => {
    const videoRef = useRef<VideoRef>(null);
    const background = require("../../assets/Temp.mp4")
  return (
    <Video
      source={background}
      ref={videoRef}
      // onBuffer={onBuffer}
      // onError={onError}
      style={styles.backgroundVideo}
      resizeMode={'cover'}
    />
  )
}

export default VideoComponent

const styles = StyleSheet.create({
  backgroundVideo: {
      width: "100%",
      height: "100%",
  }
})