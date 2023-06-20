import React from "react";
import { useState } from "react";
import { View , Text, TextInput, StyleSheet, Button, } from "react-native";
import { create } from "react-test-renderer";

interface IName{
    setNameMethod:Function
}

function Greetings(props:IName){
    
    const [name,updatename]= useState<string>();
    


    const styles = StyleSheet.create({
        
        input: {
           margin: 15,
           height: 40,
           borderColor: '#7a42f4',
           borderWidth: 1
        },
        
         text:{
            margin:20,
            color : '#7a42f4',
            fontSize: 30,
            textAlign: 'center'

         }
        
     })
    
    return(
        <View>
            
            <Text style ={styles.text}>Welcome!!!</Text>
            <Text style ={{color : 'grey',fontSize: 10,textAlign: 'center'}}>(From child component)</Text>
            <TextInput style = {styles.input} placeholder="Enter your name:" onChangeText={updatename}/>
            <Button onPress={()=>props.setNameMethod(name)} title="click here"/>


        </View>
    );

    


}

export default Greetings;