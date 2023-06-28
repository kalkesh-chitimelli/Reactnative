import axios from 'axios';
import React,{useEffect, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export type IlistItems ={

  id : number,
  taskName : string,
  isCompleted : boolean

}

export const url ="https://649bc4e1048075719236e51b.mockapi.io/api/RN-practice"



function Display({navigation}:any ) {

  const [listItems,SetlistItems] = useState<IlistItems[]>();

  
  

  const fetch =() =>{axios.get(url)
      .then(res => {
        //console.log(res);
        SetlistItems(res.data);
      }).catch((error)=>console.log(error))
    }
  useEffect(()=>{
    const unSub = navigation.addListener("focus",()=>{
      fetch();
    })
    fetch();
    return unSub
  },[navigation,listItems]);


  return (

    <SafeAreaView>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <TouchableOpacity style={{width:60,backgroundColor:'red'}} onPress={()=>navigation.navigate('Create')}>
            <Text style={{fontSize:20}} >Create</Text>
          </TouchableOpacity>
          
        </View>
      <View>
        <View style={styles.headingView}>
          <Text style={{flex:1}}>Id</Text>
          <Text style={{flex:1}}>TaskName</Text>
          <Text style={{flex:1}}>Status</Text>
          <Text style={{flex:1}}>Update</Text>
          <Text style={{flex:1}}>Delete</Text>
        </View>
        <FlatList data={listItems} renderItem={({item}) =>
         <View style={styles.flatlistView}>
          <Text style={{flex:1}}>{item.id}</Text>
          <Text style={{flex:1}}>{item.taskName}</Text>
          <Text style={{flex:1}}> {String(item.isCompleted)}</Text>
          <TouchableOpacity style={{flex:1}} onPress={()=>navigation.navigate('Update',item.id)}>
            <Text style = {styles.touchableview}>
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1}} onPress={()=>navigation.navigate('Delete',{id:item.id,taskName:item.taskName})}>
            <Text style = {styles.touchableview}>
              Delete
            </Text>
          </TouchableOpacity>
         </View>
          }/>
      </View>
    </SafeAreaView>

  );

  
}

const styles = StyleSheet.create({

    flatlistView : {

      flex : 1,
      flexDirection : 'row',
      justifyContent:'space-around',
      //alignItems:'center',
      borderBottomWidth:1
      
    },

    touchableview :{
      borderWidth:1,
      width:50,
      backgroundColor:'#00bfff'

    },

    headingView:{
      flexDirection:'row' ,
      justifyContent:'space-around',
      borderBottomWidth:1,
      borderTopWidth:1

    },


  })
export default Display;



