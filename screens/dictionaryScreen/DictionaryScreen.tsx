import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import TextInputComponent from '../../component/TextInputComponent/TextInputComponent';
import { Searchbar } from 'react-native-paper';

const DictionaryScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View>
      <View style={styles.searchEditor}>
        <Searchbar
          placeholder="Search for the definition"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      
      {/* TEMPORARY */}
      <Text style={styles.textForm1}>Word</Text>
      <Text style={styles.textForm2}>The meaning of this word is this. It can be used in various situations. This word have many references in other languages.</Text>
    </View>
  )
}

export default DictionaryScreen

const styles = StyleSheet.create({
  textForm1: {
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#000000',
    marginTop: 25,
  },
  textForm2: {
    paddingHorizontal: 10,
    fontSize: 10,
    color: '#808080',
    marginTop: 6
  },
  searchEditor: {
    padding: 15,
  }
})