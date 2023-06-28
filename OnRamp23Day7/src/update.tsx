import  React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IlistItems, url } from './display';
import axios from 'axios';

function Update({navigation,route}:any) {

    const toggleSwitch = () => Updatestatus(previousState => !previousState);
    const [listItems,SetlistItems] = useState<IlistItems[]>();
    const [task,Updatetask] = useState<string>('')
    const [status,Updatestatus] = useState<boolean>(false)

    const id = route.params

    function Updatepost(task:string,status:boolean) {
        axios
          .put((`${url}/${id}`) ,{
            taskName: task,
            isCompleted : status
          })
          .then((response) => {
            SetlistItems(response.data);
            navigation.navigate('Display')
          }).catch(console.log);
      }
    
    
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>In Update page!!!</Text>
            <TextInput placeholder='Enter Your task here'  style={{borderWidth:1}}  onChangeText={Updatetask} value={task}/>
            <Text>Click on toggle if task is completed!!</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={status}
            />
            <TouchableOpacity style={{borderWidth:1,borderRadius:5,backgroundColor:'skyblue',top:10}}onPress={()=>Updatepost(task,status)}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>


    );
}

export default Update;