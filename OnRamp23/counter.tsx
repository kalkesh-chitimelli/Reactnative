import { View,Button,Text } from "react-native";
import React from "react";

interface countupdate {
    increment : Function;
    decrement : Function;
    reset : Function;
}

function Counter(props : countupdate){
    return (
        <View>
        <Button onPress={()=>props.increment()} title = "Count Increment"/>
        <Button onPress={()=>props.decrement()} title = "Count Decrement"/>
        <Button onPress={()=>props.reset()} title = "Reset"/>
        </View>
    );
}

export default Counter;