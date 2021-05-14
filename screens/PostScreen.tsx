import React, { useState } from 'react'
import { Feather, FontAwesome, FontAwesome5, Fontisto } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, ImagePropTypes, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const WIDTH = Dimensions.get('screen').width
const PostScreen = (props) => {
    // console.log(props)
    const name = props.route.params.name
    const image = props.route.params.asd

    const [commentList, setCommentList] = useState([
        { username: 'yasin', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'alper', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '5 s' },
        { username: 'emre', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
        { username: 'sezer', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'adana', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '7 s' },
        { username: 'acun', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
        { username: 'obama', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'yaşlıkurd', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '1 s' },
        { username: 'selanagomez', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
    ])

    var example = [
        { username: 'yasin', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'alper', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '5 s' },
        { username: 'emre', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
        { username: 'sezer', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'adana', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '7 s' },
        { username: 'acun', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
        { username: 'obama', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'yaşlıkurd', comment: 'Mac guzeldi', like: false, imageUrl: 'https://instagram.fada2-2.fna.fbcdn.net/v/t51.2885-19/s320x320/123492059_164029495379338_3911492206767614405_n.jpg?_nc_ht=instagram.fada2-2.fna.fbcdn.net&_nc_ohc=5fSgTgvKSd4AX95p0Bz&tp=1&oh=a878dade6f0d07b3613441e672355f75&oe=6051CD7A', commentTime: '1 s' },
        { username: 'selanagomez', comment: 'anlamadim', like: true, imageUrl: 'https://pbs.twimg.com/media/DqdpyoMX4AAJkNe.jpg', commentTime: '1 ay' },
    ]
    const MapFunc = () => {

        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(e=>console.log(e))

     //   var nameList = commentList.map((item, index) => {
       //     return item.username
       // })
        //console.log('nameList');
        // console.log(nameList);
        //console.log(...commentList);
        // console.log([...nameList]);

    }
MapFunc()


    const onLikeChange = (index: number, item: any) => {

        item.like = !item.like
        var tempList = commentList
        tempList[index] = item
        tempList.push(item)
        setCommentList([...tempList])

    }

    return (
        <ScrollView style={{}} contentContainerStyle={{}}>
            <Text>{name}</Text>
            <Image resizeMode={'contain'} style={{ width: WIDTH, height: 300 }} source={{ uri: image }} />

            {
                //comments
                // for
                commentList.map((item, index) => {
                    // console.log('index : ' + index)
                    // console.log(item)
                    console.log(item.like ? 'true' : 'false')

                    return (

                        <View key={index} style={{ flexDirection: 'row', marginLeft: 5, marginTop: 13,borderBottomColor:'black',borderBottomWidth: 0.2 }}>
                            <View style={{ flex: 1 }} >
                                {/* <Image /> */}
                                <Image
                                    style={{ height: 40, width: 40, borderRadius: 40 }}
                                    source={{ uri: item.imageUrl }} />
                            </View>

                            <View style={{ flex: 7, flexDirection: 'row' }} >
                                <View>
                                    <Text style={{ marginHorizontal: 5, marginBottom: 3, marginTop: 5, fontSize: 18, fontWeight: '600' }}>{item.username}</Text>
                                    <Text style={{ marginLeft: 5, fontSize: 11 , marginBottom:5}}>{item.commentTime}</Text></View>
                                <View>
                                    <Text style={{ marginTop: 7 }}> {item.comment}</Text>
                                </View>
                            </View>

                            <TouchableOpacity onPress={() => onLikeChange(index, item)}>

                                {item.like
                                    ? <FontAwesome style={{ marginHorizontal: 15, marginTop: 7, color: 'red' }} name='heart' size={23} />
                                    : <Feather style={{ marginHorizontal: 15, marginTop: 7 }} name='heart' size={23} />}

                            </TouchableOpacity>

                        </View>

                    )
                })

            }

        </ScrollView >
    )
}

export default PostScreen

const styles = StyleSheet.create({})
