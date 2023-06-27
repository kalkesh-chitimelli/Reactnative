import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text,Button, Alert, StyleSheet } from "react-native";

function Settingspage ({navigation} :any) {

    return(
        <SafeAreaView>
            <Text>Hi you are on Settings Page!!!</Text>
            <View style={styles.button}>
                
                    <Button title="Home" color='white' onPress={()=>navigation.navigate("Home")}/>
            </View>
            <View style={styles.button}>    
                    <Button title='Exit' color='white' onPress={()=>
                    {Alert.alert('Thank You!!!')
                    navigation.navigate("Register")} } />
            </View>
        </SafeAreaView>

    );

    
}

const styles = StyleSheet.create({
    button:{
        borderRadius:20,
        backgroundColor:'#FD49A0',
        top:20
      }
})

export default Settingspage;