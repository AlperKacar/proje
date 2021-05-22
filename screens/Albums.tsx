import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import Photos from '../screens/Photos'
import axios from 'axios'

const Albums = (props: any) => {
    var userId = props.route.params.userId
    const [user, setUser] = useState<{ id: number; userId: number; title: string; completed: string }[]>([])
    const [loading, setLoading] = useState(true)
    const [showPhotos, setShowPhotos] = useState(false)

    React.useEffect(() => {
        props.navigation.setOptions({ headerTitle: 'ALBUMS' })
    }, [])
    useEffect(() => {
        getuser()

    }, [])


    const getuser = () => {

        axios 
        .get("http://jsonplaceholder.typicode.com/albums?userId=" + userId)
            .then(response =>setUser(response.data))
            .catch(e => console.log(e))
            setTimeout(function () { setLoading(false) }, 500);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />
    return (
        <ScrollView style={{ marginLeft: 10 }}>
            {  user.map((item, index) => {
                return (
                    <View style={{ marginBottom: 30 }} key={index} >
                        <TouchableOpacity onPress={() => { setShowPhotos(!showPhotos)}}>
                            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"userId":</span>{item.userId}</Text>
                            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"id":</span>{item.id}</Text>
                            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"title":</span>{item.title}</Text>
                        </TouchableOpacity>
                        {
                            showPhotos &&
                            <Photos albumId={item.id}/>   
                        }
                    </View>)
            })}
        </ScrollView>
    )
}

export default Albums

const styles = StyleSheet.create({})
