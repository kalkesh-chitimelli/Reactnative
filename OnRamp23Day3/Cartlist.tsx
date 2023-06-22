import React from "react";
import { View,Text,TextInput,Button } from "react-native";
import { CartInterface } from "./App";

interface Icart{

    Cartitems : CartInterface[];
    //cartincrement : Function;

}

function Cartitems(props:Icart){

    return(

        <View style={{top:10}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Cart List:</Text>
            {

                props.Cartitems.map(items => 
                <View >
                    <Text style={{fontWeight:'bold'}}>Name: {items.productName} Price: {items.productPrice} Quantity: {items.productQuantity}</Text>
                    <View style={{flexDirection:"row"}}>
                            <Button title="+" />
                            <Button title="-"/>
                    </View>
                </View>

                )
            } 
        </View>

    );

}

export default Cartitems;