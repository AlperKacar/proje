import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
const WIDTH = Dimensions.get('screen').width
const PostScreen = (props) => {
    // console.log(props)
    const name = props.route.params.name
    const image = props.route.params.url

    const ExampleData = [
        { username: 'yasin', comment: 'it looks delicious', like: true, imageUrl: 'https://cdn.vox-cdn.com/thumbor/SWt_WK3JGNDrOd5aiIKX0lsrQU4=/0x0:1000x667/920x613/filters:focal(420x253:580x413):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/61159869/lions_MM7947_0813_009.1419979795.0.jpg', commentTime: '2 gun' },
        { username: 'alperkacar', comment: 'Mac guzeldi', like: false, imageUrl: '', commentTime: '5 saat' },
        { username: 'emre', comment: 'anlamadim', like: true, imageUrl: '', commentTime: '1 ay' },
    ]

    return (
        <ScrollView style={{}} contentContainerStyle={{}}>
            <Text>{name}</Text>
            <Image resizeMode={'contain'} style={{ width: WIDTH, height: 300 }} source={{ uri: image }} />

            {
                //comments
                // for
                ExampleData.map((item, index) => {
                    // console.log('index : ' + index)
                    // console.log(item)
                    console.log(item.like ? 'true' : 'false')

                    return (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <View>
                                {/* <Image /> */}
                            </View>

                            <View>
                                <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.username}</Text>
                                <Text> {item.comment}</Text>
                            </View>

                            <View>
                                {/* <Image /> */}
                            </View>

                        </View>
                    )
                })

            }

        </ScrollView >
    )
}

export default PostScreen

const styles = StyleSheet.create({})
