import React from "react";
import { View,Text,TextInput,Button } from "react-native";
import { ProductInterface } from "./App";

interface Iproducts{
    Inventory : ProductInterface[];
    
}

function Productlist(props : Iproducts){

    return (

        <View style={{top:10}}>
            <Text style={{fontSize:15,fontWeight:'bold'}}>Product List:</Text>
            {

                props.Inventory.map(product => 
                    <View >
                        <Text style={{fontWeight:'bold'}}>Name: {product.productName}     Price:   {product.productPrice}</Text>
                        <View style={{flexDirection:"row"}}>
                            <Button title="+"/>
                            <Button title="-"/>
                        </View>
                    </View>

                )
            } 
        </View>

    );
}

export default Productlist;