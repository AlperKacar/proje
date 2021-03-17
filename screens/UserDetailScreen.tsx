import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const UserDetailScreen = (props: any) => {
    const id = props.route.params.userID //1
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getuser()
    }, [])

    const getuser = () => {

        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => handleResponse(json))
            .catch(e => console.log(e))
    }
    const handleResponse = (response: any[]) => {
        setUser(response)
        setLoading(false)

    }

    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />

    return (
        <View >
            <Text>"id"={user.id}</Text>
            <Text>{user.name}</Text>
            <Text>{user.username}</Text>
            <Text>{user.email}</Text>
            <Text>{user.address.street}</Text>
            <Text>{user.address.suite}</Text>
            <Text>{user.address.city}</Text>
            <Text>{user.address.zipcode}</Text>
            <Text>{user.address.geo.lat}</Text>
            <Text>{user.address.geo.lng}</Text>
            <Text>{user.phone}</Text>
            <Text>{user.website}</Text>
            <Text>{user.company.name}</Text>
            <Text>{user.company.catchPhrase}</Text>
            <Text>{user.company.bs}</Text>
        </View>
    )
}

export default UserDetailScreen

const styles = StyleSheet.create({})
