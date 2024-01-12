import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
const SenderMessage = ({message}) => {
  return (
    <View style={[tw`bg-cyan-500 rounded-lg round-tr-none px-5 py-3 mx-3 my-2 ml-14`,{alignSelf:"flex-end"}]}>
    <Text style={tw`text-white`}>{message.message}</Text>
    </View>
  )
}

export default SenderMessage

const styles = StyleSheet.create({})