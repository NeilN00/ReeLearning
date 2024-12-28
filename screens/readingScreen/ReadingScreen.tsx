import { View, Text } from 'react-native'
import React from 'react'
import VideoComponent from '../../component/VideoComponent/VideoComponent'
import BottomComponent from '../../component/BottomComponent/BottomComponent'
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ReadingScreenRouteProp = RouteProp<RootStackParamList, 'Reading'>;
type ReadingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Reading'
>;

interface ReadingScreenProps {
  route: ReadingScreenRouteProp;
  navigation: ReadingScreenNavigationProp;
}

const ReadingScreen: React.FC <ReadingScreenProps> = ({route,navigation}) => {
  return (
      <View>
        <VideoComponent />
        <BottomComponent navigation={navigation}/>
      </View>
  )
}

export default ReadingScreen