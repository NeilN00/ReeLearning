import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import VideoComponent from '../../component/VideoComponent/VideoComponent'
import BottomComponent from '../../component/BottomComponent/BottomComponent'
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type VocabScreenRouteProp = RouteProp<RootStackParamList, 'Vocab'>;
type VocabScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Vocab'
>;

interface VocabScreenProps {
  route: VocabScreenRouteProp;
  navigation: VocabScreenNavigationProp;
}

const VocabScreen: React.FC <VocabScreenProps> = ({route,navigation}) => {
  return (
      <View>
        <VideoComponent />
        <BottomComponent navigation={navigation}/>
      </View>
  )
}

export default VocabScreen