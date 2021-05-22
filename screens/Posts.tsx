import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import Postitem from './post/Postitem'


const Posts = (props: any) => {
    var userId = props.route.params.userId
    const [user, setUser] = useState<{ id: number; userId: number; title: string; body: string }[]>([])
    const [loading, setLoading] = useState(true)

    React.useEffect(() => {
        props.navigation.setOptions({ headerTitle: 'POSTS' })
    }, [])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/?userId=' + userId)
            .then(response => { setUser(response.data) })
            .catch(e => console.log(e))
        setTimeout(function () { setLoading(false) }, 500);
    }, [])

    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />
    //        props.navigation.navigate('Comments', { userId: item.id })
    return (
        <ScrollView style={{ marginLeft: 10 }} >
            {  user.map((item, index) =>
                <Postitem key={index} item={item} />
            )}
        </ScrollView>
    )
}

export default Posts

const styles = StyleSheet.create({})
