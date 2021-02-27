import  React,{useState} from 'react';
import { StyleSheet, TextInput, TouchableOpacity,Alert, Modal } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen(props) {
   
  const [name, setName] = useState("")
  const [url, setUrl] = useState() 
  const [visible, setVisible] = useState(false)

  const goToProfilescreen = ()=>{
    setVisible(false)
    props.navigation.navigate('PostSc',{name:name,url:url})

  }

  const login = () => {
    setVisible(true)
  }

 return(
   <View>
    <View style={styles.urll}>
      <Text style={{fontSize: 15,marginTop: 5,borderWidth: 1  }}>IMAGE URL</Text>
     <TextInput value={url} onChangeText={(text) => setUrl(text)} style={{ color: '#3f734d',backgroundColor: 'white', fontSize: 20, borderWidth: 1, width: '70%', padding: 3, marginLeft:20}} />
    </View>
    <View >
      <TouchableOpacity onPress={() => setVisible(true)}  style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'blue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%' ,marginLeft:60}}>
        <Text>User Information</Text>
      </TouchableOpacity>
    </View>
    <Modal visible={visible}>
      <View style={{flex: 1, backgroundColor:'red', alignItems:'center',justifyContent:'center'}}>
        <Text>asddas</Text>
        <TextInput value={name} onChangeText={(text) => setName(text)} style={{ color: '#3f734d',backgroundColor: 'white', fontSize: 20, borderWidth: 1, width: '70%', padding: 3, marginLeft:20}} />
        <TouchableOpacity onPress={() => goToProfilescreen()}  style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'blue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%' ,marginLeft:60}}>
        <Text>go to profile</Text>
      </TouchableOpacity>
      </View>
    </Modal>
   </View>
 )
}
const styles = StyleSheet.create({
  urll: {
    flexDirection: 'row',
    paddingHorizontal:5,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',

  }
});