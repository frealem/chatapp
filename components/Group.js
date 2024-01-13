import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Chalist from './Chalist'
import ChatRowGroup from './ChatRowGroup';


const DropdownForm = ({ handleSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter your group name"
        onChangeText={(value) => handleInputChange('name', value)}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Create</Text>
      </TouchableOpacity>
    </View>
  );
}

const Group = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  const handleSubmit = () => {
    // code to submit form data
    console.log("successfully created")
  }
  return (
    <SafeAreaView>
      <ChatRowGroup/>
      <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={toggleForm}
      >
        <Text style={{color:"#9e9e9e",fontWeight:900}}>Create Group</Text>
      </TouchableOpacity>
      {showForm && <DropdownForm handleSubmit={handleSubmit} />}
    </View>
    </SafeAreaView>
  )
}

export default Group

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:20,
  },
  buttons:{
    backgroundColor:"ffffff",
    borderColor:"#00BCD4",
    justifyContent:'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#00BCD4',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
  },
})