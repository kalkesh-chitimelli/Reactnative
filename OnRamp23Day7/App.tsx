import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Display from './src/display';
import Update from './src/update';
import Create from './src/create';
import Delete from './src/delete';






function App() {


  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
       <Stack.Navigator>
          <Stack.Screen name="Display" component={Display} options={{ title: 'Display' }}/>
          <Stack.Screen name="Create" component={Create} options={{ title: 'Create' }}/>
          <Stack.Screen name="Update" component={Update} options={{ title: 'Update' }}/>
          <Stack.Screen name="Delete" component={Delete} options={{ title: 'Delete' }}/>
       </Stack.Navigator>
      
    </NavigationContainer>

  );

  
}


export default App;



