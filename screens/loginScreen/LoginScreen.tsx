import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';
import CardActions from 'react-native-paper/lib/typescript/components/Card/CardActions';
import CardComponent from '../../component/CardComponent/CardComponent';
import TextInputComponent from '../../component/TextInputComponent/TextInputComponent';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';

type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

interface LoginScreenProps {
  route: LoginScreenRouteProp;
  navigation: LoginScreenNavigationProp;
}

const LoginScreen: React.FC<LoginScreenProps> = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageEdit}
        source={require('../../assets/logo-without-bg.png')}
      />
      <CardComponent title={'Welcome!'} buttons={[]}>
        <TextInputComponent
          leftIcon={'account'}
          label={'Email'}
          placeholder="Enter email"
        />
        <TextInputComponent
          leftIcon={'lock'}
          rightIcon={'eye-off'}
          label={'Password'}
          placeholder="Enter password"
          secureTextEntry={true}
        />
        <ButtonComponent mode={'contained-tonal'} style={styles.spaceAbove} onPress={() => {
          navigation.replace("Bottom")
        }}>
          Login
        </ButtonComponent>
        <Text style={styles.textForm}> Or login with </Text>
        <ButtonComponent
          mode={'contained-tonal'}
          style={styles.spaceBelowLog}
          icon={'google'}> </ButtonComponent>
        <Text style={styles.textForm}> Don't have an account?</Text>
        <ButtonComponent
          mode={'contained-tonal'}
          style={styles.spaceAboveSign}
          onPress={() => {
            navigation.navigate('Register');
          }}>
          Sign up
        </ButtonComponent>
      </CardComponent>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  spaceAbove: {
    marginTop: 15,
  },
  spaceBelowLog: {
    marginTop: 5,
  },
  spaceAboveSign: {
    marginTop: 5,
  },
  textForm: {
    padding: 10,
    fontSize: 14,
    color: '#000000',
    marginTop: 25,
  },
  imageEdit: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});
