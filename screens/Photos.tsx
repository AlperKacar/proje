import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

const Photos = (params: any) => {
    var albumId = params.albumId
    const [album, setalbum] = useState<{ id: number; albumId: number; title: string; completed: string; url: string ; thumbnailUrl:string}[]>([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
       
    }, [])
    useEffect(() => {

        getalbum()
    }, [])

    const getalbum = () => {

        fetch("http://jsonplaceholder.typicode.com/photos?albumId=" + albumId)
            .then(response => response.json())
            .then(json => handleResponse1(json))
            .catch(e => console.log(e))
    }

    const handleResponse1 = (response: any[]) => {
        var namealbum = response.map((item1, index) => {
            return {
                id: item1.id, title: item1.title, albumId: item1.albumId, url: item1.url, thumbnailUrl: item1.thumbnailUrl
            }
        })
        setalbum(response)
        setTimeout(function () { setLoading(false) }, 500);
        console.log(namealbum);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />
    return (
        <ScrollView style={{ marginLeft: 10 }}>
            {  album.map((item1, index) => {
                return (
                    <View style={{ marginBottom: 30 , marginTop:30}} key={index}>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"albumId":</span>{item1.albumId}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"id":</span>{item1.id}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"title":</span>{item1.title}</Text>
                        <Image style={{ width: 200, height: 200 }}
                            source={{ uri: item1.url }}>
                        </Image>
                        <Image style={{ width: 100, height: 100 }}
                            source={{ uri: item1.thumbnailUrl}}>
                        </Image>
                    </View>)
            }
            )}
        </ScrollView>
    )
}

export default Photos

const styles = StyleSheet.create({})