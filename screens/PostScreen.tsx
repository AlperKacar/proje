import React from 'react'
import { StyleSheet, Text, View ,Image ,Dimensions} from 'react-native'
const WIDTH = Dimensions.get('screen').width
const PostScreen = (props) => {
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

export default PostScreen

const styles = StyleSheet.create({})
