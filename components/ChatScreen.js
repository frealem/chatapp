import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "twrnc";
// import Header from '../components/Header';
import Chalist from '../components/Chalist';
const ChatScreen = () => {
  return (
    <SafeAreaView style={tw``}>
      <Chalist/>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})