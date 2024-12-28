import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { Button } from 'react-native-paper';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type SplashScreenRouteProp = RouteProp<RootStackParamList, 'Splash'>;
type SplashScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Splash'>;

interface SplashScreenProps {
  route: SplashScreenRouteProp,
  navigation: SplashScreenNavigationProp
}

const SplashScreen:React.FC<SplashScreenProps> = ({route, navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login')
    }, 5000)
  
    return () => {
      
    }
  }, [])
  

  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.imageEdit}
        source={require('../../assets/logo-without-bg.png')}
      />

      <ActivityIndicator size={'large'} color={'#ffffff'}/>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C4D6B0',
  },
  imageEdit: {
    width: 275,
    height: 275,
    resizeMode: 'contain',
  },
});
