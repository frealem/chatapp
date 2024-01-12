import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc";
import ChatRow from './ChatRow';
export const friends=[
  {id:1,
  message:"hello guys",},
  {
    id:2,
    message:"good evening",
  }
]
const Chalist = () => {
 
  return friends.length>0?(
    <FlatList
    style={tw`h-full`}
        data={friends}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><ChatRow friends={item}/>}
    />
  ):(
    <View style={tw`flex pt-62 justify-center items-center `}>
        <Text style={tw`text-center text-xl  text-cyan-500`}>No Matches here! </Text>
    </View>
  )
}

export default Chalist

const styles = StyleSheet.create({})