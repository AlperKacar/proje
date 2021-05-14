import React, { useEffect, useState } from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UserList1Screen = (props:any) => {

    const [list1, setList1] = useState<{id:number,userId:number,title:string}[]>([])
    const WIDTH = Dimensions.get('screen').width
    useEffect(() => {
        getList1()
    }, [])


    const getList1 = () =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => handleResponse(json))
        .catch(e => console.log(e))
    }
    
    const handleResponse = (response: any[]) => {

        var namelist1 = response.map((item, index) => {
            return {
                id: item.id ,userId: item.userId, title: item.title
            }
        })

        console.log(namelist1);
        setList1(namelist1)

    }


    return (
        <View>
            <ScrollView>
                {
                    list1.map((item,index)=>{
                        return (
                            <TouchableOpacity key={index} onPress={()=>{props.navigation.navigate('User2DetailScreen', {userId:item.id })}}>
                                <Text style={{fontSize:25,padding:8, borderBottomColor:'black',borderBottomWidth: 1}}>{item.id}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
        </View>
    )
}

export default UserList1Screen

const styles = StyleSheet.create({})
