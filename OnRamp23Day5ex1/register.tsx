import React from 'react';
import {
  Button,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface regmodalprop{
    login:Function,
    Exit:Function,
    Next:Function
}

function Register(props:regmodalprop) {
  

  return (

    <SafeAreaView >      
            <View style={styles.mainView}>
                
                <View style={styles.componentView}>
                    <Text style={styles.text}>Register</Text>
                    <Image source={{uri:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'}} style={{height:75,width:75,borderRadius:50}}/>
                    <TouchableOpacity style={styles.edit}>
                        <Image source={{uri:'https://static.vecteezy.com/system/resources/previews/018/754/499/original/camera-icon-in-gradient-colors-foto-signs-illustration-png.png'}} style={{height:20,width:20}} />
                    </TouchableOpacity>
                    <View style={styles.inputheader}>
                        <View style={styles.input}>
                            <Image source={{uri:'https://cdn.vectorstock.com/i/1000x1000/97/70/purple-user-icon-in-the-circle-a-solid-gradient-vector-23519770.webp'}} style={{height:35,width:35}}/>
                            <TextInput placeholder='User Name' placeholderTextColor={'purple'} style={styles.textinput} />
                        </View>
                        <View style={styles.input}>
                            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUKJOWiQKBQ1jgymqpYQVUVheMZEcMD4wv1jdyU5xQp1vlkrIhjJiE9mnmES-9Cfo0GJtsejET-E&usqp=CAU&ec=48600112'}} style={{height:28,width:30}}/>
                            <TextInput placeholder='Address' placeholderTextColor={'purple'} style={styles.textinput} />
                        </View>
                        <View style={styles.input}>
                            <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CZrbx-l_KnFl4OKiJ8SBv5jtdEs7jqOz39wR7xpYJA&usqp=CAU&ec=48600112'}} style={{height:32,width:32}}/>
                            <TextInput placeholder='Mobile Number' placeholderTextColor={'purple'} style={styles.textinput} />
                        </View>
                    </View>
                        <View style={styles.button}>
                            <Button title='Next' color='white' onPress={()=>props.Next()}/>
                        </View>
                </View>
                
            </View>
            
          <View style={styles.loginbutton}>
                <Button title='Login' color='white' onPress={()=>props.login()} />
          </View>
          <View style={styles.exitbutton}>
                <Button title='Exit' color='white' onPress={()=>props.Exit()}/>
          </View>
    </SafeAreaView>
    
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
    height:350,
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
    flexDirection:'row',
    margin:10
  },
  inputheader:{
    flexDirection:'column',
  },
  edit:{

    marginLeft:50,
    bottom:10

  },
  loginbutton:{

    width:150,
    borderRadius:20,
    backgroundColor:'#FD49A0',
    top:350
    
  },
  exitbutton:{

    width:150,
    borderRadius:20,
    backgroundColor:'#FD49A0',
    top:315,
    left:225
    
  },

  
});

export default Register;