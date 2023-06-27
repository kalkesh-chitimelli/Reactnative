import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View,Text,Button, Alert, StyleSheet } from "react-native";

function Home ({route,navigation}: any ) {

    const { name } = route.params;

    return (

        <SafeAreaView>
            <Text>Hi {JSON.stringify(name.username)} you are on Home Page!!!</Text>
            <View style={styles.button}>
                
                    <Button title="Settings" color='white' onPress={()=>navigation.navigate("Settings")}/>
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

export default Home;