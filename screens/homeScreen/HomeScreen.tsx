import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';
import CardComponent from '../../component/CardComponent/CardComponent';
import UserHeaderComponent from '../../component/UserHeaderComponent/UserHeaderComponent,';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

interface HomeScreenProps {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({route, navigation}) => {
  return (
    <View style={styles.container}>

      <UserHeaderComponent></UserHeaderComponent>

      <Text style={styles.spaceAbove}>Let's learn something new</Text>
      
      <View style={styles.editor}>
        <View style={styles.cardView}>
          <CardComponent title="" buttons={[]}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageEdit}
                source={require('../../assets/grammar.png')}
              />
            </View>
            <ButtonComponent mode={'contained-tonal'} onPress={() => {
              navigation.navigate("Grammar")
            }}> Grammar </ButtonComponent>
        </CardComponent>
        </View>
        <View style={styles.cardView}>
          <CardComponent title="" buttons={[]}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageEdit}
                source={require('../../assets/reading.png')}
              />
            </View>
            <ButtonComponent mode={'contained-tonal'} onPress={() => {
              navigation.navigate("Reading")
            }}> Reading </ButtonComponent>
          </CardComponent>
        </View>
      </View>
      <View style={styles.editor}>
        <View style={styles.cardView}>
          <CardComponent title="" buttons={[]}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageEdit}
                source={require('../../assets/vocabulary.png')}
              />
            </View>
            <ButtonComponent mode={'contained-tonal'} onPress={() => {
              navigation.navigate("Vocab")
            }}> Vocabulary </ButtonComponent>
        </CardComponent>
        </View>
        <View style={styles.cardView}>
          <CardComponent title="" buttons={[]}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageEdit}
                source={require('../../assets/writing.png')}
              />
            </View>
            <ButtonComponent mode={'contained-tonal'} onPress={() => {
              navigation.navigate("Writing")
            }}> Writing </ButtonComponent>
          </CardComponent>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
  editor: {
    flexDirection: "row",
  },
  spaceAbove: {
    padding: 10,
    fontSize: 12,
    marginTop: 15,
    color: "000000",
  },
  cardView: {
    padding: 5,
    width: "50%",
  },
  imageEdit: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  imageView: {
    alignItems: "center",
    marginBottom: 10
  }
});
