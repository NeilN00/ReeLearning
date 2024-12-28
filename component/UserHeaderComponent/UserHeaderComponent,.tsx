import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import { Divider } from 'react-native-paper';

const UserHeaderComponent = () => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2016/11/29/13/14/attractive-1869761_1280.jpg',
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.textContainer}>
          <View style={styles.nameEmailContainer}>
            <Text style={styles.name}>Neil Narwekar</Text>
            <Text style={styles.email}>tempmail@gmail.com</Text>
          </View>
          <View style={styles.editButtonContainer}>
            <Entypo name="edit" color={'#000'} size={24} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserHeaderComponent;

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
    display: 'flex'
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  textContainer: {
    width: '75%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameEmailContainer: {},
  name: {
    fontSize: 20,
    color: '#000',
  },
  email: {},
  editButtonContainer: {
  },
});