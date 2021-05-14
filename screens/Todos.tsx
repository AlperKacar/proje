import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'

const Todos = (props: any) => {
    var userId = props.route.params.userId
    const [user, setUser] = useState<{ id: number; userId: number; title: string; completed: string }[]>([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        props.navigation.setOptions({ headerTitle: 'TODO' })
    }, [])
    useEffect(() => {
        getuser()
    }, [])


    const getuser = () => {

        fetch("http://jsonplaceholder.typicode.com/todos?userId=" + userId)
            .then(response => response.json())
            .then(json => handleResponse(json))
            .catch(e => console.log(e))
    }

    const handleResponse = (response: any[]) => {
        var nameUser = response.map((item, index) => {
            return {
                id: item.id, title: item.title, completed: item.completed, userId: item.userId
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
                        <Text style={{ fontSize: 20 }}>"userId": {item.userId}</Text>
                        <Text style={{ fontSize: 20 }}>"id": {item.id}</Text>
                        <Text style={{ fontSize: 20 }}>"title": {item.title}</Text>
                        <Text style={{ fontSize: 20 }}>"completed": {item.completed}</Text>
                    </View>)
            }
            )}
        </ScrollView>
    )
}

export default Todos

const styles = StyleSheet.create({})
