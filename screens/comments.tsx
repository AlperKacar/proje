import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View, ScrollView } from 'react-native'

const Comments = (params: any) => {
    const postId = params.postId
    const [post, setpost] = useState<{ id: number; name: string; body: string; email: string; postId: number; }[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getpost()
    }, [])


    const getpost = () => {

        fetch("http://jsonplaceholder.typicode.com/comments?postId=" + postId)
            .then(response => response.json())
            .then(json => handleResponse1(json))
            .catch(e => console.log(e))
    }

    const handleResponse1 = (response: any[]) => {
        var namepost = response.map((item, index) => {
            return {
                id: item.id, name: item.name, body: item.body, postId: item.postId
            }
        })
        setpost(response)
        setTimeout(function () { setLoading(false) }, 500);
        console.log(namepost);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />

    return (
        <ScrollView style={{ marginLeft: 10 }}>
            {  post.map((item, index) => {
                return (
                    <View style={{ marginBottom: 30 }} key={index}>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"postId":</span>{item.postId}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"id":</span>{item.id}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"name": </span>{item.name}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"body": </span>{item.body}</Text>
                        <Text style={{ fontSize: 20 }}><span style={{color:'red'}}>"email":</span>{item.email}</Text>

                    </View>)
            }
            )}
        </ScrollView>
    )
}

export default Comments

const styles = StyleSheet.create({})