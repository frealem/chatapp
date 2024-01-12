import { Button, FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import Header from '../components/Header';
import { auth,db } from '../firebaseConfig';
import getMatch from '../components/libs/getMatch'
import { useRoute } from '@react-navigation/native';
import tw from 'twrnc';
import ReceiverMessage from '../components/RecieverMessage';
import SenderMessage from '../components/SenderMeassage';
// import { addDoc, collection, onSnapshot, orderBy, doc,docs,query, serverTimestamp } from 'firebase/firestore';
const MessageScreen = () => {
//   const user = auth.currentUser;
//   const {params}=useRoute();
 
//  const {matchDetails}=params;
  const[input,setInput]=useState("");
  const[message,setMessage]=useState([]);

  return (
    <SafeAreaView>
    <Header title={getMatch(matchDetails.users,user.uid).displayName} call />
      <KeyboardAvoidingView
      behavior={Platform.OS==="android" ? "padding" :"height"}
      style={tw`flex-1`}
      keyboardVerticalOffset={10}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <FlatList
          data={message}
          inverted={-1}
          style={tw`pl-4`}
          keyExtractor={item => item?.id}
          renderItem={({item:message})=>
          message.userId===user.uid ?(
          <SenderMessage key={message.id} message={message}/>):
          ( <ReceiverMessage key={message.id} message={message}/>)}
        />
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <View 
      style={tw`flex-row bottm-0 justify-between items-center border-t border-gray-200 px-5 py-2`}>
        <TextInput
          style={tw`h-10 text-lg`}
          placeholder='send message...'
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
          value={input}
        />
        <Button onPress={sendMessage} title='Send' background=" #00bcd4"/>
      </View>
      
      
    </SafeAreaView>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})