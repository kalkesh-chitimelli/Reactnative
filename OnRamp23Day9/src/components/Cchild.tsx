import React from "react";
import {Text, View } from "react-native";
import Dchild from "./Dchild";


function Cchild(){
    return (

        <View>
            <Text>My Name is C</Text>
            <Dchild/>
        </View>

    );
}

export default Cchild;