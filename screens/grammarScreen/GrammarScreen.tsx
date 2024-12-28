import { View, Text } from 'react-native'
import React from 'react'
import VideoComponent from '../../component/VideoComponent/VideoComponent'
import BottomComponent from '../../component/BottomComponent/BottomComponent'
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type GrammarScreenRouteProp = RouteProp<RootStackParamList, 'Grammar'>;
type GrammarScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Grammar'
>;

interface GrammarScreenProps {
  route: GrammarScreenRouteProp;
  navigation: GrammarScreenNavigationProp;
}

const GrammarScreen: React.FC <GrammarScreenProps> = ({route,navigation}) => {
  return (
      <View>
        <VideoComponent />
        <BottomComponent navigation={navigation}/>
      </View>
  )
}

export default GrammarScreen