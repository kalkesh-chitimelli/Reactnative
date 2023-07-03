import React, { useState } from "react";
import {SafeAreaView, Text, View } from "react-native";
import Achild from "./src/components/Achild";
import { Dcontext } from "./src/contexts/Dcontext";


function App(){

  const [name,Setname] = useState<string>('Kalkesh')

    return (

       <SafeAreaView style={{flex:1,justifyContent:'center'}}>
          <View style={{flex:0,flexDirection:"column",justifyContent:'center',alignItems:'center',borderWidth:10,borderBlockColor:'blue'}}>
            <Dcontext.Provider value={{name,Setname}}>
              <View >
                  <Text>My Name is {name} </Text>
                  <Achild/>
              </View>
            </Dcontext.Provider>
          </View>
          
       </SafeAreaView>

    );
}

export default App;