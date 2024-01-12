import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import tw from 'twrnc';
const ReceiverMessage = ({message}) => {
  return (
    <View style={[tw`bg-cyan-100 rounded-lg round-tl-none px-5 py-3 mx-3 my-2 ml-10 `,{alignSelf:"flex-start"}]}>
    <Image
        style={tw`h-7 w-7 rounded-full absolute top-0 -left-10 border-cyan border-2`}
        source={{uri:message.photoURL,}}
    />
    <Text style={tw`text-cyan-500`}>{message.message}</Text>
    </View>
  )
}


export default ReceiverMessage

const styles = StyleSheet.create({})