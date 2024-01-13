import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';
// import{auth, db} from '../firebaseConfig'
// import getMatch from './libs/getMatch'
import tw from "twrnc";
//import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

const MAX_CHARACTERS = 20;

const ChatRowGroup = ({friends}) => {

  const[isAdmin,setIsAdmin]=useState(false);
  const handleAddFriend = async (friendId) => {
    try {
      await addFriend(userId, friendId);
      // code to display success message
    } catch (err) {
      // code to display error message
    }
  }
    const navigation=useNavigation();
   // const user = auth.currentUser;
    const [matchedUserInfo,setMatchedUserInfo]=useState(null);
    const[lastMessage,setLastMessage]=useState('');
    const text =lastMessage || "say hi to the group"

  const truncatedText = text.length > MAX_CHARACTERS
    ? text.substring(0, MAX_CHARACTERS) + '...'
    : text;


  return (
    <TouchableOpacity 
    style={tw`flex-row items-center py-3 px-5 bg-white mx-3 my-1 rounded-lg`}
    onPress={() => navigation.navigate('MessageScreen')}>
    
      <Image
       style={tw`rounded-full h-16 w-16 mr-4 `}
        source={{uri:'https://img.freepik.com/free-photo/portrait-young-candid-man-student-boy-with-clean-face-relaxed-facial-expression-casual-smile-checked-shirt-t-shirt-summer-outfit-look-white-background_176420-45901.jpg?w=900&t=st=1704900938~exp=1704901538~hmac=e87ad01633272c2ba5311a1c8b15542c7dd7b19879f14d30cd8b137edd21b60c'||matchedUserInfo?.photoURL}}
      />
      <View>
      <Text style={tw`text-lg font-semibold text-cyan-500`}>{matchedUserInfo?.displayName||"Dawit Asefa"}</Text>
      <View style={{marginTop:-10,marginLeft:190}} onPress={()=>{console.log("now he is your friend")}}>
      {!isAdmin && <Text style={{color:"#00BCD4"}}>Admin</Text>}
      </View>
      
      <Text>{truncatedText}</Text>
      </View>
      
    </TouchableOpacity>
  )
}

export default ChatRowGroup

const styles = StyleSheet.create({})