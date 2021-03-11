import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Alert, Modal, Button, ScrollView, SafeAreaView, Text, View } from 'react-native';


export default function TabTwoScreen(props) {

  const [name, setName] = useState("")
  const [url, setUrl] = useState()
  const [visible, setVisible] = useState(false)
  const [secondModalVısıble, setSecondModalVısıble] = useState(false)

  const goToProfilescreen = (name: string, url: string) => {
    setVisible(false)
    // setSecondModalVısıble(true)
    props.navigation.navigate('Prfsc', { name: name, url: url })
  }

  const login = () => {
    setVisible(true)
  }

  return (
    <View>
      <View >
        <TouchableOpacity onPress={() => setVisible(true)} style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'blue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
          <Text>User Information</Text>
        </TouchableOpacity>
      </View>
      <Modal visible={visible} transparent onRequestClose={() => setVisible(false)}>
        <View style={{ flex: 1, backgroundColor: '#00000055', alignItems: 'center', justifyContent: 'center' }}>
         
          <View style={{ flexDirection: 'row',  }}>
            <View style={{ flex: 1,marginHorizontal:20, paddingVertical:10, backgroundColor:'#fff', alignItems:'center' }}>
              <Text style={{ marginBottom: 20, fontSize: 20 }}>NAME</Text>
              <TextInput value={name} onChangeText={(text) => setName(text)} style={{ color: '#3f734d', backgroundColor: 'white', fontSize: 20, borderWidth: 1, width: '70%', padding: 3, marginLeft: 20 }} />
              <TouchableOpacity onPress={() => goToProfilescreen(name, 'https://picsum.photos/300/300')} style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'blue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 20 }}>
                <Text>go to profile</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

      </Modal>
      <Modal visible={secondModalVısıble} onRequestClose={() => setSecondModalVısıble(false)}>
        <View style={{ backgroundColor: 'red', flex: 1 }}></View>
      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
  urll: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});