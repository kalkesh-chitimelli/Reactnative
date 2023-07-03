import React from "react";
import {Text, View } from "react-native";
import Cchild from "./Cchild";


function Bchild(){
    return (

        <View>
            <Text>My Name is B</Text>
            <Cchild/>
        </View>

    );
}

export default Bchild;