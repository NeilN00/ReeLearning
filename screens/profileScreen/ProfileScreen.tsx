import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import CardComponent from '../../component/CardComponent/CardComponent';
import UserHeaderComponent from '../../component/UserHeaderComponent/UserHeaderComponent,';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <UserHeaderComponent></UserHeaderComponent>

      <Text style={styles.spaceAbove}>Look at your scores!</Text>

      <View style={styles.editor}>
        <View style={styles.cardView}>
          <CardComponent title="" buttons={[]}>
            <View style={styles.imageView}>
              <Image
                style={styles.imageEdit}
                source={require('../../assets/grammar.png')}
              />
            </View>
            <Text style={styles.textForm1}>Grammar</Text>
            <Text style={styles.textForm2}>Score: 0000</Text>
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
            <Text style={styles.textForm1}>Reading</Text>
            <Text style={styles.textForm2}>Score: 0000</Text>
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
            <Text style={styles.textForm1}>Vocabulary</Text>
            <Text style={styles.textForm2}>Score: 0000</Text>
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
            <Text style={styles.textForm1}>Writing</Text>
            <Text style={styles.textForm2}>Score: 0000</Text>
          </CardComponent>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 20,
  },
  editor: {
    flexDirection: 'row',
  },
  spaceAbove: {
    padding: 10,
    fontSize: 12,
    marginTop: 15,
    color: '000000',
  },
  cardView: {
    padding: 5,
    width: '50%',
  },
  imageEdit: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  textForm1: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#000000',
    marginTop: 25,
  },
  textForm2: {
    paddingHorizontal: 10,
    fontSize: 7,
    color: '#808080',
    marginTop: 6,
  },
  imageView: {
    alignItems: 'center',
    marginBottom: 10
  },
});
