import React, { useState } from 'react';
import {
    Alert,
  Button,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';


function Login({ navigation } : any) {


    const [mobile,Setmobile] = useState<string>('')
    const next = ()=>{

        if ( mobile !==''){
            navigation.navigate('Home',{name:{mobile}})
        }
        else{
            Alert.alert('Kindly Enter your Monile number!!!')
        }
    
      }  

  return (

    <SafeAreaView >
            <View style={styles.mainView}>
            <Image source={{uri:'https://images-platform.99static.com//Lk8Ynns4AZDh3MOiSTs4Wwtlx6A=/174x0:799x625/fit-in/500x500/99designs-contests-attachments/96/96378/attachment_96378051'}} style={{height:150,width:300}}/>
                <View style={styles.componentView}>
                    <Text style={styles.text}>Login</Text>
                    <View style={styles.input}>
                        <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX///+AAIB5AHnDk8O0f7R9AH2kWaTDkcPDocPUtNT//f/ew97Am8CoZaj9+v3Prc+LLIv17fWoaaicUZzw4fDWutaXR5e9jL3cvty6hrqPOI+xdrGLI4uGGIbJoMmgWaDd/XyZAAABx0lEQVRoge3b23KCQAwGYIgbW+UgIKJy0Pd/y4qgM1Wz1ixInflzndnPoIAX+T3PXssgjOaKisJg+eRoe8WrhIhVRZSsYr2cZsy+upizVD3zmvRwW7TWzp1J8v3llexMJ+/EmbeLm9qKc+9UdCHM8ug46WNyoZFz8Rf2qFvq5VxBb6TrTY+6xeaNgp6Jp+3vfrfxXmyeDUn7VJibKuTeYWn/9Kj6XfKDZ2j6hfpUmu8u71/q8oBzoamsvhRVleRK01759km7+01Pc6WD26rYbWr1G/c0t9PUHOllz4vYgSbjQhsCDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo0aNCgQYMGDRo06IlonrvQc5fNK59d9s3cVt1YuWXdVua4ZUdGu1toyHmjsq7C75crrGoaYIVVt0f64duz/5K25A/GpZmLKCqe4WPQXAdtV1Db7RFobvp8Qd5Y7THow6Xv8G66uYYq8ua9NCfX52ua2Mb+tKnFyEk39jVKsrF/15rIiRy0OdNlnzuJS3ufJmgjxov6M4/nbzs92rtU8SJLqKo7tTGLhbHf1dpQlRwl621biKyXtX9yJgzQTRgbnDIs6Y0aEf0Bh/glY/FtfMoAAAAASUVORK5CYII='}} style={{height:30,width:30}}/>
                        <TextInput placeholder='Mobile Number' placeholderTextColor={'purple'} style={styles.textinput} onChangeText={Setmobile} />
                        </View>
                        <View style={styles.button}>
                            <Button title='Next' color='white' onPress={next}/>
                        </View>
                </View>
                
            </View>
            <View style={styles.registerbutton}>
                    <Button title='Register' color='white' onPress={()=>navigation.navigate("Register")}/>
            </View>
            <View style={styles.exitbutton}>
                    <Button title='Exit' color='white' onPress={()=>
                    {Alert.alert('Thank You!!!')
                    navigation.navigate("Register")} } />
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
  },
  registerbutton:{

    width:150,
    borderRadius:20,
    backgroundColor:'#FD49A0',
    top:350
    
  },
  exitbutton:{

    width:150,
    borderRadius:20,
    backgroundColor:'#FD49A0',
    top:312,
    left:225
    
  },

  
});

export default Login;