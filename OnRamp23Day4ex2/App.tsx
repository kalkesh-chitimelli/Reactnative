/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Calculator from './Calculator';


function App(): JSX.Element {
  
  const addFunction = (num1 : number,num2 : number) =>{return num1+num2};
  const subFunction = (num1 : number,num2 : number) => {return num1-num2};
  const multiplyFunction = (num1 : number,num2 : number) => {return num1*num2};
  const divFunction = (num1 : number,num2 : number) => {return num1/num2};

  return (
    <SafeAreaView>
      <View>
        <Calculator addFunction ={addFunction}
        subFunction = {subFunction}
        multiplyFunction = {multiplyFunction}
        divFunction = {divFunction}
      
      
        />
      </View>
    </SafeAreaView>
  );
}




export default App;
