import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useContext } from "react";
import { Dcontext } from "../contexts/Dcontext";


function Dchild(){

    const {name,Setname} : any = useContext(Dcontext);
    const [Dname,Setdname] = useState<string>('')

    const Buttonhandler = () => {
        Setname(Dname);
        Setdname('');

    }

    return (

        <View>
            <Text>My Name is D</Text>
            <TextInput placeholder="Enter name" value={Dname} onChangeText={Setdname} style={{borderWidth:1}}/>
            <Button title='Submit' onPress={()=>Buttonhandler()}/>
            <Text>My Name is {name}</Text>
        </View>

    );
}

export default Dchild;
