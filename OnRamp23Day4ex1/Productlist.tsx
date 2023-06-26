import React from "react";
import { Text,TextInput,View,Button,FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";


interface Iproducts{
    name:string,
    price:number,
    image?:string,
    add:string,
    remove:string
}

interface IprodFunctions{
    addIntocart : Function,
    removeFromcart : Function
}

const products : Iproducts[] = [
    {
        name : "SamsungS22",
        price: 700000,
        image:'https://m.media-amazon.com/images/I/71wGLBDEsvL._AC_UF894,1000_QL80_.jpg',
        add:"ADD",
        remove:"REMOVE"
    
    },
    {
        name : "iPhone 14",
        price: 800000,
        image:'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg',
        add:"ADD",
        remove:"REMOVE"
    },
    {
        name : "Macbook pro",
        price: 1800000,
        image:'https://www.shutterstock.com/image-photo/burgas-bulgaria-august-31-2017-260nw-715105864.jpg',
        add:"ADD",
        remove:"REMOVE"
    },
    {
        name : "Hp probook",
        price: 800000,
        image:'https://www.cnet.com/a/img/resize/dbfc80d666cec08957b550dda74c71039780e7eb/hub/2011/02/22/ba2dffaa-f0f6-11e2-8c7c-d4ae52e62bcc/HP_ProBook_s-series_left_metallic_gray.JPG?width=1200',
        add:"ADD",
        remove:"REMOVE"
    }
]

function Productlist(props: IprodFunctions){
    // const[url, setUrl] = useState('');
    return(
        <View style={{padding:25,paddingTop:10}} >
            {/* <Image source={require('./assets/iphone.jpg')}/> */}
            <FlatList
                data = {products}
                renderItem ={({item})=> 
                
                <View style={{borderWidth:1,padding:10,paddingLeft:10}}>
                    <Image source={{uri:item.image}} height={100} width={100} style={{alignSelf:'center'}}/>
                    <View style={{flexDirection:'row',paddingLeft:10}}>
                        <Text style={styles.fltext}>Name: {item.name}</Text>
                        <Text style={styles.fltext}>Price: {item.price}</Text>
                    </View>
                <View style={{paddingTop:5}}> 
                    {/* <TouchableOpacity style={{alignSelf:'center',backgroundColor: 'cyan',borderRadius:5}} onPress={props.addIntocart({item})}>
                        <Text>{item.add}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf:'center',backgroundColor: 'cyan',borderRadius:5}} onPress={props.removeFromcart({item})}>
                        <Text>{item.remove}</Text>
                    </TouchableOpacity> */}
                </View>
                </View>}
                
                
            />
              
        </View>
    );

    
}
const styles = StyleSheet.create({
        
    fltext: {
        alignSelf:'center',
        paddingLeft : 15,
        paddingTop: 15
        
    }
})

export default Productlist;