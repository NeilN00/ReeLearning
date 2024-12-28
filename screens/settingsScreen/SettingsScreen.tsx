import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';

type SettingsScreenRouteProp = RouteProp<RootStackParamList, 'Setting'>;
type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Setting'
>;

interface SettingsScreenProps {
  route: SettingsScreenRouteProp;
  navigation: SettingsScreenNavigationProp;
}

const SettingsScreen: React.FC <SettingsScreenProps> = ({route,navigation}) => {
  return (
      <View style={styles.container}>
        <ButtonComponent
        mode={'contained-tonal'}
        style={styles.buttonEdit}
        icon={'questionmark'}
        onPress={() => {
          navigation.replace("HowToPlay")
        }}> How To Play
      </ButtonComponent>
      <ButtonComponent
        mode={'contained-tonal'}
        style={styles.buttonEdit}
        icon={'logout'}> Log Out
      </ButtonComponent>
      </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonEdit: {
    padding: 5,
    marginTop: 15
  }
})