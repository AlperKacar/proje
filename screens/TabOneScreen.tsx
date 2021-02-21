import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Image, Dimensions , TouchableOpacity, addons} from 'react-native';
import { Text, View } from '../components/Themed';

const WIDTH = Dimensions.get('screen').width

export default function TabOneScreen(props) {

  React.useEffect(()=>{
    props.navigation.setOptions({headerTitle:'İNSTAGRAM'})
  },[])
  const login = () => {
    alert(FontAwesome5)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 50 }}
          source={{ uri: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A' }} />
        <Text style={{fontSize: 20, marginLeft: 15, flex: 1}}>alperkcr_</Text>
        <Entypo name={'dots-three-vertical'} size={25} />
      </View>

      <Image resizeMode={'contain'} style={{ width:WIDTH, height: 300}} source={{ uri: 'https://picsum.photos/300/300' }} />

      <View style={{ flexDirection: 'row' }}>
        <Feather style={{ marginHorizontal: 10 }} name='heart' size={40} />
        <TouchableOpacity onPress={() => login()} style={{}} >
          <FontAwesome5 name={'comment'} size={40} />
        </TouchableOpacity>
        <FontAwesome style={{ marginHorizontal: 10 }} name='send-o' size={40} />
        <View style={{ flex: 1 }} />
        <AntDesign name='save' size={40} />
      </View>
      <View style={styles.header}>
        <Image
          style={{ height: 50, width: 50, borderRadius: 50 }}
          source={{ uri: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-15/e35/c0.479.1080.1080a/s150x150/119946546_3210951562357371_2834164568007044292_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ktzusQNG3K4AX-Br3EK&tp=1&oh=33615f80c62e0b5b4da3070e0713ac70&oe=602B896F' }} />
        <Text style={{fontSize: 20, marginLeft: 15, flex: 1}}>lsezerl</Text>
        <Entypo name={'dots-three-vertical'} size={25} />
      </View>
      <Image resizeMode={'contain'} style={{ width:WIDTH, height: 300}} source={{ uri: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-15/e15/c0.319.720.720a/s150x150/119650951_333402744643656_1347998221879292998_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=Vyd9SJwwk8EAX-afGS2&tp=1&oh=5ddcad7438257c8d760fa81c0e78393a&oe=602B86A2' }} />

    </View>
  );
}  


const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
    flex: 1,
  },
  header: {
   // backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center'
  },
  title: {
    flex: 1,
    // backgroundColor:'blue',
    marginLeft: 15,
  },
  text: {fontSize: 30},
});