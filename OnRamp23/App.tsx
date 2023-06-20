import React, { useState } from "react";
import {Text, TextInput, View , StyleSheet} from "react-native"

import Counter from "./counter";
import Greetings from "./greetings";

function App () : JSX.Element {
  const [name, setName] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const increment = ()=>{
    setCount(count + 1);

  }
  const decrement = ()=>{
    setCount(count-1);
  }
  const reset = () =>{
    setCount(0);
  }


    return (
        <View>
          
          <Greetings setNameMethod={(value:string)=>{
            setName("Hello "+ value)
          }}></Greetings>
          <Text style={{color : 'red',fontSize: 25,textAlign: 'center'}}>{name}</Text>

          <Counter increment={increment} reset={reset} decrement={decrement}></Counter>
          <Text style={{color : 'red',fontSize: 15,textAlign: 'center'}}>Count is : {count}</Text>


        </View>
      
    );
      
}

export default App;
