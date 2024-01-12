import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Personal from './Personal';
import Group from './Group';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <>
        <Tab.Navigator  screenOptions={{
        headerShown: false, // Hide the header for all screens
      }}
      >
      <Tab.Screen name="Personal" component={Personal} />
      <Tab.Screen name="Group" component={Group} />
    </Tab.Navigator>
    </>
  )
}

export default TabBar

const styles = StyleSheet.create({
})