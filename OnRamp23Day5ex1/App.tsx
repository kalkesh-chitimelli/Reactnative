/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Register from './register';
import Login from './login';



function App() {
  
//const [loginmodal,Updateloginmodal] = useState(false);
//const [regmodal,Updateregmodal] = useState(false);
// const logmodal= ()=> {
//   Updateloginmodal(true);
// }
const[visibleModal,setModalVisible] = useState(false);
const login=()=>{
setModalVisible(true);
}
const registerFunc=()=>{
  setModalVisible(false);
}

const next=()=>{
  Alert.alert('Components are Yet to be Develop!!!');
}

const exit=()=>{
  Alert.alert('Thank You!!!')
}

  return (
    
    <><Register login={login} Exit={exit} Next={next} />
    <Login Register={registerFunc} modalVisible={visibleModal} Exit={exit} Next={next}/></>
    
    
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
