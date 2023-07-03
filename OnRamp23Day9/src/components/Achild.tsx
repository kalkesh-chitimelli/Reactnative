import React from "react";
import {Text, View } from "react-native";
import Bchild from "./Bchild";


function Achild(){
    return (

        <View>
            <Text>My Name is A</Text>
            <Bchild/>
        </View>

    );
}

export default Achild;