import React, { useState } from 'react';
import { RNCamera} from 'react-native-camera';
import { FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';






function App() {

  let camera : any;
  let address : string;

  const [imageList,SetimageList] = useState<string[]>([])


  const takePicture = async() => {
    if (camera) {
      const options = { quality: 0.5, base64: true };
      const data = await camera.takePictureAsync(options);
      address = String(data.uri);
      SetimageList((prev)=>([...prev,address]))
     
    }
  };

  
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}} >
          <View style={{flex:1,borderBottomWidth:1,justifyContent:'center',alignItems:'center'}} >
            <RNCamera
              ref={ref => {
                camera = ref;
              }}
              
            />
            <TouchableOpacity style={{borderWidth:2,backgroundColor:'orange'}} onPress={takePicture.bind(camera)}>
                <Text style={{ fontSize: 14 }}> Click Me </Text>
            </TouchableOpacity>
          </View>
          <View style={{flex:9}} >

              <Text style={{fontSize:25}}>Image Address :</Text>
              <ScrollView>
                  <FlatList 
                    data = {imageList}
                    renderItem={({item})=>
                      <Text style={{borderWidth:1}}>{item}</Text>
                    }
                  />

              </ScrollView>

          </View>
        </View>
      </SafeAreaView>
    );
}

export default App;
