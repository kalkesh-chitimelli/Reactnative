import  React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { url } from './display';
import axios from 'axios';
import { IlistItems } from './display';

function Delete({navigation,route}:any) {

    const [listItems,SetlistItems] = useState<IlistItems[]>();

    const id = route.params.id
    const name = route.params.taskName

    function deletePost(id : number) {
        axios
          .delete(`${url}/${id}`)
          .then((response) => {
            SetlistItems(response.data)
            navigation.navigate('Display')
          }).catch(console.log);
      }
      
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>In Delete page!!!</Text>
            <TouchableOpacity style={{borderWidth:1,borderRadius:5,backgroundColor:'skyblue',top:10}} onPress={()=>deletePost(id)}>
                <Text>
                    Click here to Delete : '{name}'
                </Text>
            </TouchableOpacity>

        </View>
        

    );
}

export default Delete;