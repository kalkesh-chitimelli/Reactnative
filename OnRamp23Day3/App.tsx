import React from 'react';
import { Component } from 'react';
import { View , Text, ScrollView} from 'react-native';
import Productlist from './productlist';
import Cartitems from './Cartlist';

export interface ProductInterface{

  productName:string,
  productPrice: number,

}

export interface CartInterface{

  productName:string,
  productPrice:number,
  productQuantity:number

}



class App extends Component {

  state: {inventory:ProductInterface[],cartProduct :CartInterface[]}={inventory:[],cartProduct:[]};

  constructor(props:any){

    super(props)

    this.state.inventory = [
    {productName:"iPhone 14", productPrice: 800000},
    {productName:"Samsung S22", productPrice: 700000},
    {productName:"Macbook pro", productPrice: 1800000},
    {productName:"Hp probook", productPrice: 800000}
  ]
    this.state.cartProduct=[
      {productName:"iPhone 14", productPrice: 800000, productQuantity:1},
      {productName:"Samsung S22", productPrice: 700000, productQuantity:1},
      {productName:"Macbook pro", productPrice: 1800000, productQuantity:1},
      {productName:"Hp probook", productPrice: 800000, productQuantity:1}
    ]

  }

  

  

  render(){
    return (

      <ScrollView>
          <View style={{margin:25}}>
              <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold'}}>Shopping Cart</Text>
              <Productlist Inventory={this.state.inventory} />
              <Cartitems Cartitems={this.state.cartProduct} />
          </View>
      </ScrollView>

    );
  }

}







export default App;
