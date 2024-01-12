import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header1 from '../components/Header1'
import TabBar from '../components/TabBar'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainHome}>
      <Header1/>
      <TabBar/>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
   mainHome:{
    flex:1,
},
})