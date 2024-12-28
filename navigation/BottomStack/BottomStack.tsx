import HomeScreen from '../../screens/homeScreen/HomeScreen'
import ProfileScreen from '../../screens/profileScreen/ProfileScreen'
import DictionaryScreen from '../../screens/dictionaryScreen/DictionaryScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen options={{
        tabBarIcon: ({focused, color, size}) => (
          <MaterialCommunityIcons color={color} size={size} name={focused ? 'account' : 'account-outline'} />
        )
      }} name="Profile" component={ProfileScreen}/>
      <Tab.Screen options={{
        tabBarIcon: ({focused, color, size}) => (
          <Ionicons color={color} size={size} name={focused ? 'home' : 'home-outline'} />
        )
      }} name="Home" component={HomeScreen}/>
      <Tab.Screen options={{
        tabBarIcon: ({focused, color, size}) => (
          <MaterialCommunityIcons color={color} size={size} name={focused ? 'book' : 'book-outline'} />
        )
      }} name="Dictionary" component={DictionaryScreen}/>
    </Tab.Navigator>
  )
}

export default BottomStack