import React, { useEffect, useState } from 'react'
import { Dimensions,ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
const WIDTH = Dimensions.get('screen').width
const UserListScreen = (props: any) => {

    const [list, setList] = useState<{ id: number ; name:string ; userId:string}[]>([])

    useEffect(() => {
        // getList()
        getList()
    }, [])


    const getList = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => handleResponse(json))
            .catch(e => console.log(e))

    }



    const handleResponse = (response: any[]) => {
        // console.log(response);


        var nameList = response.map((item, index) => {
            return {
                id: item.id, name: item.name, company: item.company.name ,userId: item.userId
            }
        })

        console.log(nameList);
        setList(nameList)

    }


    return (
        <View>
            <ScrollView>
                {
                    list.map((item, index) => {
                        return (
                            <View style={{  borderBottomColor: 'black', borderBottomWidth: 0.5 }} key={index} >
                                <Text style={{ fontSize: 25 }}>{item.name}</Text>
                                <View style={{ flexDirection: 'row'  }}>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('Posts', { userId:item.id}) }} style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center', width: 90, marginRight: 10, marginLeft:25, marginBottom: 30 }}>
                                        <Text>Go To Post</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('Albums', { userId:item.id}) }} style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center',  width: 90, marginRight: 10, marginLeft:15, marginBottom: 30 }}>
                                        <Text>Go To Album</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { props.navigation.navigate('Todos', { userId:item.id}) }} style={{ marginTop: 20, borderRadius: 10, backgroundColor: 'lightblue', height: 40, justifyContent: 'center', alignItems: 'center',width:90, marginRight: 15 , marginLeft:15, marginBottom: 30}}>
                                        <Text>Go To Todo</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

export default UserListScreen

const styles = StyleSheet.create({})
