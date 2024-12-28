import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ToggleButton } from 'react-native-paper';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootStack';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import ButtonComponent from '../../component/ButtonComponent/ButtonComponent';

type QuestionScreenRouteProp = RouteProp<RootStackParamList, 'Questions'>;
type QuestionScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Questions'
>;

interface QuestionScreenProps {
  route: QuestionScreenRouteProp;
  navigation: QuestionScreenNavigationProp;
}

const QuestionScreen: React.FC <QuestionScreenProps> = ({route,navigation}) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onButtonToggle = (option) => {
    setSelectedOption(option === selectedOption ? null : option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textForm1}> Question </Text>
      <View style={styles.container1}>
      <View style={styles.editor}>
        <ToggleButton
          icon={selectedOption === 'A' ? 'checkbox-marked' : 'checkbox-blank-outline'}
          value="A"
          onPress={() => onButtonToggle('A')}
        />
        <Text style={styles.textForm}> Option A </Text>
      </View>
      <View style={styles.editor}>
        <ToggleButton
          icon={selectedOption === 'B' ? 'checkbox-marked' : 'checkbox-blank-outline'}
          value="B"
          onPress={() => onButtonToggle('B')}
        />
        <Text style={styles.textForm}> Option B </Text>
      </View>
      </View>
      <View style={styles.container1}>
      <View style={styles.editor}>
        <ToggleButton
          icon={selectedOption === 'C' ? 'checkbox-marked' : 'checkbox-blank-outline'}
          value="C"
          onPress={() => onButtonToggle('C')}
        />
        <Text style={styles.textForm}> Option C </Text>
      </View>
      <View style={styles.editor}>
        <ToggleButton
          icon={selectedOption === 'D' ? 'checkbox-marked' : 'checkbox-blank-outline'}
          value="D"
          onPress={() => onButtonToggle('D')}
        />
        <Text style={styles.textForm}> Option D </Text>
      </View>
      </View>
      <ButtonComponent
        mode={'contained-tonal'}
        style={styles.buttonEdit}
        icon={'publish'}
        onPress={() => {
          navigation.replace("Result")
        }}> Submit
      </ButtonComponent>
    </View>
  );
}

export default QuestionScreen

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4
  },
  editor: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  textForm: {
    fontSize: 14,
    color: '#000000',
    marginTop: 8,
  },
  textForm1: {
    fontSize: 24,
    color: '#000000',
    marginBottom:20,
    padding: 10
  },
  buttonEdit: {
    padding: 5,
    marginTop: 15
  }
})