// import React, { useState } from "react";
// import { Button, TextInput, View } from "react-native";


// export default function loginform({onSubmit}){

//     const [username,updateUsername] = useState();
//     const [password,updatePassword] = useState();
//     const [disablestatus,updateDisablestatus] = useState(true);

//     if (username !== '' && password !== ''){
//         updateDisablestatus(false)
//     }
    
//     return (

        

//         <View>
//             <TextInput placeholder="username" onChangeText={updateUsername}/>
//             <TextInput placeholder="password" onChangeText={updatePassword} />
//             <Button title="Submit" onPress={()=>onSubmit(username,password)} disabled={disablestatus}/>
//         </View>

//     )


// }