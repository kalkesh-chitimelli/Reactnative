/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  Settings,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Register from './register';
import Login from './login';
import Home from './home';
import Settingspage from './settings';



function App() {
  
const Stack = createNativeStackNavigator();

  return (
    
    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} options={{ title: 'Day-6' }}/>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Day-6' }}/>
          <Stack.Screen name="Home" component={Home} options={{ title: 'Day-6' }}/>
          <Stack.Screen name="Settings" component={Settingspage} options={{ title: 'Day-6' }}/>
       </Stack.Navigator>
      
    </NavigationContainer>
    
    
  );
}

const styles = StyleSheet.create({

  
  button:{

    width:150,
    borderRadius:20,
    backgroundColor:'#FD49A0',
    top:30,
    
  },

  mainView:{

    flex : 1,
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'center',
    margin:100,
  },

  componentView : {
    backgroundColor:'#D4D0D0',
    height:150,
    width:300,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',  
    
  },
  text:{
    fontSize:40,
    bottom:10
  },
  textinput:{
    borderBottomWidth:1,
    width:250,
    textAlign:'center'
  },
  input:{
    flexDirection:'row'
  }

  
});

export default App;
