import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const PopupMenu = ({visible}) => {

  return (
    <View>
      <Modal visible={{}} animationType="slide">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Menu Item 1</Text>
            <Text>Menu Item 2</Text>
            <Text>Menu Item 3</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PopupMenu;
