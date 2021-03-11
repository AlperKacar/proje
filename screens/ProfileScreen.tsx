import React from 'react'
import { StyleSheet, Text, View ,Image ,Dimensions} from 'react-native'
const WIDTH = Dimensions.get('screen').width
const ProfileScreen = (props) => {
    console.log(props)
    const name = props.route.params.name
    const image = props.route.params.url

    return (
        <View>
           <Text>{name}</Text>
            <Image resizeMode={'contain'} style={{ width:WIDTH, height: 300}} source={{ uri: image }} /> 
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({})