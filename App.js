import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen'
import Header1 from './components/Header1';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import LoginScreen from './Screens/loginregisterForm';
import RegisterScreen from './Screens/registerScreen';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <>
      <NavigationContainer>
      <Stack.Navigator>
     
        <Stack.Screen name="Login" component={LoginScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen}  options={{headerShown:false}} />
      
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown:false}}
      /></Stack.Navigator>
      
    </NavigationContainer>
    </>

  )
}

export default App

