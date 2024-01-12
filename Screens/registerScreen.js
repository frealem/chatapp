import { Image, StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import tw from "twrnc";

import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import {createAccount} from '../hooks/signalr'

const RegisterScreen = () => {
    const[email,setemail]=useState(null);
    const[userName,setuserName]=useState(null);
    const[password,setPassword]=useState(null);
    // const[name,setName]=useState(null);
    
    const navigator=useNavigation();
    const incomplete=!email||!password;

    
      const handleSignUp = async () => {
        try {
          await createAccount(userName,email, password);
          console.log("succefully signed up")
          navigator.navigate('Login')
        } catch (err) {
          console.log(err)
        }
      }
     
  return (
    <KeyboardAvoidingView style={tw`flex-1 items-center pt-8 bg-gray-500`}>
      <Image
      style={tw`h-20 w-full`}
        resizeMode="contain"
        source={{uri:"https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1702005508~exp=1702006108~hmac=b438a7daeb87e21917d5c038b402c1166bbf2c38cb7b5a020e73f683e76f4f7b"}}
      />
      <Text style={tw`text-xl text-white`}>SIGN UP</Text>
    
   <View style={tw`text-center text-xl pt-8`}>
   <TextInput
        style={tw`text-center text-xl pb-2 mb-6 text-gray-500 rounded-md bg-white`}
        placeholder="Enter your Full Name"
        value={userName}
        onChangeText={text=>setuserName(text)}
    />
   <TextInput
        style={tw`text-center text-xl pb-2 mb-6 text-gray-500 rounded-md bg-white`}
        placeholder="Enter your email"
        value={email}
        onChangeText={text=>setemail(text)}
    />
    <TextInput
        style={tw`text-center text-xl pb-2 mb-6 text-gray-500 rounded-md bg-white`}
        placeholder="Enter your password"
        value={password}
        onChangeText={text=>setPassword(text)}
        secureTextEntry
    />
    
   </View>
   <TouchableOpacity
   onPress={handleSignUp}
   style={[tw` w-70 h-9 mb-6  rounded-md bg-white mt-70 `,
   ]}
   disabled={incomplete}
   
   ><Text  style={[tw`text-center text-xl  text-gray-500 font-bold`,
   incomplete ? tw `text-gray-400`:tw `text-gray-500`]}
   >SIGN UP</Text></TouchableOpacity>

   <TouchableOpacity
   onPress={()=>{navigator.navigate('Login')}}><Text  style={tw`flex text-xl  text-white`}>I have already an account,Sign In.</Text></TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})