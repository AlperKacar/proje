import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UserListScreen = (props) => {

    const [list, setList] = useState<{id:number,name:string,company:any}[]>([])

    useEffect(() => {
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
                id: item.id, name: item.username , company: item.company.name
            }
        })

        console.log(nameList);
        setList(nameList)

    }


    return (
        <View>
            <ScrollView>
                {
                    list.map((item,index)=>{
                        return (
                            <TouchableOpacity key={index} onPress={()=>{props.navigation.navigate('UserDetailScreen', {userID:item.id })}}>
                                <Text style={{height:40,width:300, }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
                </ScrollView>
        </View>
    )
}

export default UserListScreen

const styles = StyleSheet.create({})
