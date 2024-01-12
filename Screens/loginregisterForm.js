import { Image, StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from "twrnc";
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signIn } from '../hooks/signalr';


const LoginScreen = () => {
  const[email,setemail]=useState(null);
    const[password,setPassword]=useState(null);
    
    const navigator=useNavigation();
    const incomplete=!email||!password;
    
    const handleSignIn= async () => {
      try {
        const data = await signIn(email, password);
        if(data === null) {
          console.log("email or password incorrect");
        }
        console.log("successfully logged in");
        navigator.navigate('Home')
        // code to store token and navigate to next screen
      } catch (err) {
        // code to display error message
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
      <Text style={tw`text-xl text-white`}>SIGN IN</Text>
    
   <View style={tw`w-70 text-center text-xl pt-8`}>
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
   onPress={handleSignIn}
   style={[tw` w-70 h-9 mb-6  rounded-md bg-white mt-70 `,
   ]}
   disabled={incomplete}
   
   ><Text  style={[tw`text-center text-xl  text-gray-500 font-bold`,
   incomplete ? tw `text-gray-400`:tw `text-gray-500`]}
   >SIGN IN</Text></TouchableOpacity>

   <TouchableOpacity
   onPress={()=>{navigator.navigate('Register')}}><Text  style={tw`flex text-xl  text-white`}>I don't have an account yet,Sign Up.</Text></TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})