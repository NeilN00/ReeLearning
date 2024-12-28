import { View, Text } from 'react-native'
import React from 'react'
import VideoComponent from '../../component/VideoComponent/VideoComponent'
import BottomComponent from '../../component/BottomComponent/BottomComponent'
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type WritingScreenRouteProp = RouteProp<RootStackParamList, 'Writing'>;
type WritingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Writing'
>;

interface WritingScreenProps {
  route: WritingScreenRouteProp;
  navigation: WritingScreenNavigationProp;
}

const WritingScreen: React.FC <WritingScreenProps> = ({route,navigation}) => {
  return (
      <View>
        <VideoComponent />
        <BottomComponent navigation={navigation}/>
      </View>
  )
}

export default WritingScreen