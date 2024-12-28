import React from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import CardActions from 'react-native-paper/lib/typescript/components/Card/CardActions';
import CardComponent from '../../component/CardComponent/CardComponent';
import TextInputComponent from '../../component/TextInputComponent/TextInputComponent';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';

type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;
type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

interface RegisterScreenProps {
  route: RegisterScreenRouteProp,
  navigation: RegisterScreenNavigationProp
}

const RegisterScreen: React.FC<RegisterScreenProps> = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageEdit} source={require('../../assets/logo-without-bg.png')}/>
      <CardComponent title={'Create an account here'} buttons ={[
      ]}>
        <TextInputComponent leftIcon={'account'} label={'Email'} placeholder='Enter email' />
        <TextInputComponent leftIcon={'lock'} rightIcon={'eye-off'} label={'Password'} placeholder='Enter password' secureTextEntry={true}/>
        <ButtonComponent mode={'contained-tonal'} style={styles.spaceAbove} onPress={() => {
          navigation.replace("Bottom")
        }}> Sign up </ButtonComponent>
        <Text style={styles.textForm}> Go back to login </Text>
        <ButtonComponent mode={'contained-tonal'} style={styles.spaceBelowLog} onPress={()=>{navigation.navigate("Login")}} icon={"arrow-left"}> Login </ButtonComponent>
      </CardComponent>
    </View>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  spaceAbove:{
    marginTop: 15
  },
  spaceBelowLog:{
    marginTop: 5
  },
  textForm:{
    padding: 10,
    fontSize: 14,
    color: '#000000',
    marginTop: 25
  },
  imageEdit: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  }
})