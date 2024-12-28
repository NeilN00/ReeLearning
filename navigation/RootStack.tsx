import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen/SplashScreen';
import LoginScreen from '../screens/loginScreen/LoginScreen';
import RegisterScreen from '../screens/registerScreen/RegisterScreen';
import BottomStack from './BottomStack/BottomStack';
import SettingsScreen from '../screens/settingsScreen/SettingsScreen';
import { Image } from 'react-native';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ReadingScreen from '../screens/readingScreen/ReadingScreen';
import GrammarScreen from '../screens/grammarScreen/GrammarScreen';
import VocabScreen from '../screens/vocabScreen/VocabScreen';
import WritingScreen from '../screens/writingScreen/WritingScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'
import SubtitleScreen from '../screens/subtitleScreen/SubtitleScreen';
import QuestionScreen from '../screens/questionScreen/QuestionScreen';
import BottomComponent from '../component/BottomComponent/BottomComponent';
import ResultScreen from '../screens/resultScreen/ResultScreen';
import HowScreen from '../screens/howScreen/HowScreen';

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Bottom: undefined;
  Setting: undefined;
  Home: undefined;
  Reading: undefined;
  Grammar: undefined;
  Vocab: undefined;
  Writing: undefined;
  Subtitles: undefined;
  Questions: undefined;
  BottomButton: undefined;
  Result: undefined;
  HowToPlay: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Bottom" component={BottomStack} options={{
          headerTitle: "ReeLearning",
          headerRight: () => (
            <Ionicons color={'#000'} size ={24} name={'settings-outline'} />
          )
        }} />
        <Stack.Screen name="Setting" component={SettingsScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Home" component={BottomStack} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Reading" component={ReadingScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Grammar" component={GrammarScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Vocab" component={VocabScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Writing" component={WritingScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Subtitles" component={SubtitleScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Questions" component={QuestionScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="BottomButton" component={BottomComponent} options={{
          headerShown: false
        }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="HowToPlay" component={HowScreen} options={{
          headerShown: false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
