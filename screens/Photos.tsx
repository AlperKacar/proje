import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

const Photos = (props: any) => {
    var userId = props.route.params.userId
    const [user1, setUser1] = useState<{ id: number; albumId: number; title: string; completed: string; url: string }[]>([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        props.navigation.setOptions({ headerTitle: 'ALBUM' })
    }, [])
    useEffect(() => {

        getuser1()
    }, [])

    const getuser1 = () => {

        fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + userId)
            .then(response => response.json())
            .then(json => handleResponse1(json))
            .catch(e => console.log(e))
    }

    const handleResponse1 = (response: any[]) => {
        var nameUser1 = response.map((item1, index) => {
            return {
                id: item1.id, title: item1.title, albumId: item1.albumId, url: item1.url, thumbnailUrl: item1.thumbnailUrl
            }
        })
        setUser1(response)
        setTimeout(function () { setLoading(false) }, 500);
        console.log(nameUser1);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />
    return (
        <ScrollView style={{ marginLeft: 10 }}>
            {  user1.map((item1, index) => {
                return (
                    <View style={{ marginBottom: 30 }} key={index}>
                        <Text style={{ fontSize: 20 }}>"albumId": {item1.albumId}</Text>
                        <Text style={{ fontSize: 20 }}>"id": {item1.id}</Text>
                        <Text style={{ fontSize: 20 }}>"title": {item1.title}</Text>
                        <Image style={{ width: 100, height: 100 }}
                            source={{ uri: item1.url }}>
                        </Image>
                    </View>)
            }
            )}
        </ScrollView>
    )
}

export default Photos

const styles = StyleSheet.create({})