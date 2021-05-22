import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

const Albums = (props: any) => {
    var userId = props.route.params.userId
    const [user, setUser] = useState<{ id: number; userId: number; title: string; completed: string }[]>([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        props.navigation.setOptions({ headerTitle: 'ALBUM' })
    }, [])
    useEffect(() => {
        getuser()

    }, [])


    const getuser = () => {

        fetch("http://jsonplaceholder.typicode.com/albums?userId=" + userId)
            .then(response => response.json())
            .then(json => handleResponse(json))
            .catch(e => console.log(e))
    }

    const handleResponse = (response: any[]) => {
        var nameUser = response.map((item, index) => {
            return {
                id: item.id, title: item.title, userId: item.userId
            }
        })
        setUser(response)
        setTimeout(function () { setLoading(false) }, 500);
        console.log(nameUser);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />
    return (
        <ScrollView style={{ marginLeft: 10 }}>
            {  user.map((item, index) => {
                return (
                    <View style={{ marginBottom: 30 }} key={index}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('Photos', { userId: item.id }) }}>
                            <Text style={{ fontSize: 20 }}>"userId": {item.userId}</Text>
                            <Text style={{ fontSize: 20 }}>"id": {item.id}</Text>
                            <Text style={{ fontSize: 20 }}>"title": {item.title}</Text>
                        </TouchableOpacity>
                    </View>)
            }
            )}
        </ScrollView>
    )
}

export default Albums

const styles = StyleSheet.create({})
