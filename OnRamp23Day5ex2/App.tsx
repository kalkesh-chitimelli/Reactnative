import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated, TouchableWithoutFeedback, TouchableOpacity, SafeAreaView } from 'react-native';
export default function App() {

  
  const [animation, setAnimation] = useState(new Animated.Value(0))

  const handleAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start( () => {
      Animated.timing(animation,{
        toValue: 0,
        duration: 1000,
        useNativeDriver: false
      }).start()
    })
  }
  
  
  const boxInterpolation =  animation.interpolate({
    inputRange: [0, 0.5],
    outputRange:["rgb(90,210,244)" , "rgb(224,82,99)"]
  })

  const animatedStyle = {
    backgroundColor: boxInterpolation
  }

  

  return (
   <SafeAreaView style={styles.container}>
    
        <TouchableOpacity onPress={handleAnimation}>
        <Animated.View style={{...styles.box, ...animatedStyle}}>
          <Text style = {styles.text}>Click Me!!!</Text>
        </Animated.View>
        </TouchableOpacity>
      
   </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    width: 380,
    height: 650,
    backgroundColor: '#5AD2F4',
  },
  text:{
    textAlign:'center',
    top:300
  }
});

