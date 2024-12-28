import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';

interface BottomComponentProps {
  navigation: any
}

const BottomComponent: React.FC <BottomComponentProps> = ({navigation}) => {
  return (
    <View>
      <ButtonComponent mode={'contained-tonal'} style={styles.bottomLeft} onPress={() => {
        navigation.replace("Subtitles")
      }}> Read subtitles </ButtonComponent>
      <ButtonComponent mode={'contained-tonal'} style={styles.bottomRight} onPress={() => {
        navigation.replace("Questions")
      }}> Start questions </ButtonComponent>
    </View>
  )
}

export default BottomComponent

const styles = StyleSheet.create({
  bottomRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10, 
    padding: 10,
  },
  bottomLeft: {
    position: 'absolute',
    left:0,
    bottom: 0,
    margin: 10, 
    padding: 10,
  },
})