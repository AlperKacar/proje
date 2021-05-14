import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,Image ,Dimensions, TouchableOpacity} from 'react-native'
const WIDTH = Dimensions.get('screen').width
const UserList = (props:any) => {
    console.log(props)



    return (
        <View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('UserList1Screen')}} style={{ marginTop: 30, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
                <Text>Posts</Text>
            </TouchableOpacity>
             <TouchableOpacity onPress={()=>{props.navigation.navigate('Comments')}} style={{ marginTop: 50, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
                <Text>Comments</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Albums')}} style={{ marginTop: 50, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
                <Text>Albums</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Photos')}} style={{ marginTop: 50, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
                <Text>Photos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('Todos')}} style={{ marginTop: 50, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: '70%', marginLeft: 60 }}>
                <Text>Todos</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({})