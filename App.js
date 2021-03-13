import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import Login from './screens/login'
import SignUp from './screens/signup'
import Home from './screens/home'
import MainPage from './screens/mainpage'
import Motivation from './screens/motivation'
import Info from './screens/info'
import Entertain from './screens/entertain'
import Read from './screens/read'

export default function App() {
  return (
    <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  Home: {screen: Home},
  Login:{screen: Login},
  MainPage:{screen:MainPage},
  SignUp:{screen:SignUp},
  Motivation: {screen:Motivation},
  Info: {screen:Info},
  Entertain: {screen:Entertain},
  Read:{screen:Read}

})

const AppContainer =  createAppContainer(switchNavigator);
