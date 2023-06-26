/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Productlist from './Productlist';

interface ICartItems{
  productName:string,
  productPrice:number
}
function App(): JSX.Element {

  const [Cartitems,setCartitems] = useState<ICartItems[]>([])

  const addIntocart = (item : ICartItems)=>{
    setCartitems(prev=>[...prev,item])
  };

  const removeFromcart = (item : ICartItems)=>{setCartitems(prev=>prev.filter(product=>product.productName===item.productName))};

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:25,fontWeight:'bold'}}>Shopping Cart</Text>
          <View>
            <Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Product List</Text>
            <Productlist addIntocart={addIntocart} removeFromcart={removeFromcart}/>
          </View>
      </View>
    </SafeAreaView>
  );

  
  
}

export default App;
