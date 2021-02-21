import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
 
  const [ad, setAd] = React.useState()
  const [soyad, setSoyad] = React.useState()
  const [email, setEmail] = React.useState()
  const [sifre, setSifre] = React.useState()
  const [numara, setNumara] = React.useState()
  const login = () => {
    <Text>Kullanıcı bilgileri</Text>
    alert(ad)
    alert(soyad)
    alert(email)
    alert(sifre)
    alert(numara)
  
  }

  return (
    <View style={styles.assss}>
      <View style={styles.asd}>
        <Text style={{fontSize: 15, marginLeft:70,marginTop: 5 }}>AD</Text>
        <Text style={{fontSize: 15,marginLeft:170 ,marginTop: 5 }}>SOYAD</Text>
      </View>
      <View style={styles.abc}>
        <TextInput value={ad} onChangeText={(text) => setAd(text)} style={{marginBottom:-5, color: '#3f734d',backgroundColor: 'white', fontSize: 20, borderWidth: 1, width: '45%', padding: 3, marginLeft:10 }} />
        <TextInput  value={soyad} onChangeText={(text) => setSoyad(text)} style={{marginBottom:-5, color: '#3f734d',backgroundColor: 'white', fontSize: 20, borderWidth: 1, width: '45%', padding: 3 ,marginLeft:20 }} />
      </View>
      <View style={styles.asd}>
        <Text style={{fontSize: 15, marginLeft: 160 ,marginBottom: -5}}>EMAİL</Text>
      </View> 
      <View style={styles.abc}>
        <TextInput value={email} onChangeText={(text) => setEmail(text)} keyboardType="email-address" style={{ marginBottom:-5, color: '#3f734d', backgroundColor: 'white',fontSize: 20, borderWidth: 1, width: '95%', padding: 3, marginLeft:10 }} />
      </View>
      <View style={styles.asd}>
        <Text style={{fontSize: 15, marginLeft:160}}>SİFRE</Text>
      </View>
      <View style={styles.abc}>
        <TextInput value={sifre} onChangeText={(text) => setSifre(text)} secureTextEntry={true}  style={{ backgroundColor: 'white',marginBottom:-5, color: '#3f734d', fontSize: 20, borderWidth: 1, width: '70%', padding: 3, marginLeft:55}}/>
      </View>
      <View style={styles.asd}>
        <Text style={{fontSize: 15, marginLeft: 150 }}>NUMARA</Text>
      </View>
      <View style={styles.abc}>
        <TextInput value={numara} onChangeText={(text) => setNumara(text)} keyboardType='numeric' style={{marginBottom: 5,backgroundColor: 'white', color: '#3f734d', fontSize: 20, borderWidth: 1, width: '70%', padding: 3, marginLeft:55 }}/>
      </View>
      <View style={styles.giris}>
        <TouchableOpacity onPress={() => login()}  style={{ marginTop: 5, borderRadius: 10, backgroundColor: 'blue', height: 40, justifyContent: 'center', alignItems: 'center', width: '90%' ,marginLeft:20}}>
          <Text>Giris</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  abc: {
    flexDirection: 'row',
    paddingHorizontal: 1,
    paddingVertical: 5,
    backgroundColor: 'red'
    
  },
  asd: {
   
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 7,
    backgroundColor: 'red'
  },
  giris: {
    backgroundColor: 'red'
  },
  assss: {
    backgroundColor: 'red',
    flex: 1
  }
  
});