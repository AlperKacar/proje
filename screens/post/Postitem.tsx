import React, { useState } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import Comments from '../Comments'

const Postitem = ({item}:any) => {

    const [showComments, setShowComments] = useState(false)

    return (
        <View style={{ marginBottom: 30 }}>
        <TouchableOpacity onPress={() => { setShowComments(!showComments)}}>
            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"userId":</span>{item.userId}</Text>
            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"id":</span>{item.id}</Text>
            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"title":</span>{item.title}</Text>
            <Text style={{ fontSize: 20 }}><span style={{color:'yellowgreen'}}>"body":</span>{item.body}</Text>
        </TouchableOpacity>
        {
            showComments &&
            <Comments  postId={item.id} />
        }
    </View>
    )
}

export default Postitem
