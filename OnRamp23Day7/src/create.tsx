import axios from 'axios';
import  React, { useState } from 'react';
import { Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { IlistItems } from './display';
import { url } from './display';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

function Create(props:any) {

    //const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => Updatestatus(previousState => !previousState);
    const [listItems,SetlistItems] = useState<IlistItems[]>();
    const [task,Updatetask] = useState<string>('')
    const [status,Updatestatus] = useState<boolean>(false)

    function createPost(task:string,status:boolean) {
        axios
          .post(url, {
            taskName: task,
            isCompleted : status
          })
          .then((response) => {
            SetlistItems(response.data);
            props.navigation.navigate('Display')
          }).catch(console.log);
      }
    
    
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>In Create page!!!</Text>
            <TextInput placeholder='Enter Your task Here' style={{borderWidth:1}} onChangeText={Updatetask} value={task}/>
            <Text>Click on toggle if task is completed!!</Text>
            <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={status ? '#f5dd4b' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={status}
            />
            <TouchableOpacity style={{borderWidth:1,borderRadius:5,backgroundColor:'skyblue',top:10}} onPress={()=>createPost(task,status)}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>


    );
}

export default Create;