import React, { useEffect, useState } from 'react'
import { ActivityIndicator, StyleSheet, Text, View , TouchableOpacity , ScrollView} from 'react-native'

const comments = (props: any) => {
    var userId = props.route.params.userId 
    const [user1, setUser1] = useState<{ id: number ; name:string ; body:string ; email:string ; postId:number ; }[]>([])
    const [loading, setLoading] = useState(true)
    
    React.useEffect(()=>{
      props.navigation.setOptions({headerTitle:'POST'})
    },[])
    useEffect(() => {
        getuser1()
    }, [])


    const getuser1 = () => {

        fetch("http://jsonplaceholder.typicode.com/comments?postId=" + userId)
            .then(response => response.json())
            .then(json => handleResponse1(json))
            .catch(e => console.log(e))
    }

    const handleResponse1 = (response: any[]) => {
        var nameUser1 = response.map((item1, index) => {
            return {
                id: item1.id, name:item1.name, body:item1.body , postId: item1.postId 
            }
        })
        setUser1(response)
        setTimeout(function(){setLoading(false)},500);
        console.log(nameUser1);
    }


    if (loading)
        return <ActivityIndicator size={'large'} color={'red'} style={{ marginTop: 30 }} />

    return (
        <ScrollView style={{marginLeft:10}}>
            {  user1.map((item1, index) => {
            return (
                    <View style={{ marginBottom: 30 }} key={index}>
                <Text style={{fontSize:20}}>"postId": {item1.postId}</Text>
                <Text style={{fontSize:20}}>"id": {item1.id}</Text>
                <Text style={{fontSize:20}}>"name": {item1.name}</Text>
                <Text style={{fontSize:20}}>"body": {item1.body}</Text>
                <Text style={{fontSize:20}}>"email": {item1.email}</Text>
                </View>)}
                )}
        </ScrollView>
    )
}

export default comments

const styles = StyleSheet.create({})