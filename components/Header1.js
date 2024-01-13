import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import { useState } from "react";

const Header1 = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleSearch, setModalVisibleSearch] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModalSearch = () => {
    setModalVisibleSearch(!isModalVisibleSearch);
  };

  return (
    <View style={styles.mainHeader}>
      <View style={styles.firstHeader}>
        <TouchableOpacity style={styles.userInfo} onPress={toggleModal}>
          <MaterialCommunityIcons name="account" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.logotxt}>Chatting</Text>
        <TouchableOpacity style={styles.search} onPress={toggleModalSearch}>
          <FontAwesome5 name="search" size={28} color="white" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={false}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContent}>
          <ModalContent onClose={toggleModal} />
        </View>
      </Modal>
      <Modal
        visible={isModalVisibleSearch}
        animationType="fade"
        transparent={false}
        onRequestClose={toggleModalSearch}
      >
        <View style={styles.modalContent}>
          <ModalContentSearch onClose={toggleModalSearch} />
        </View>
      </Modal>
    </View>
  );
};
function ModalContent({ onClose }) {
  return (
    <View style={styles.modalContentContainer}>
      <View style={styles.profileMain}>
        <TouchableOpacity>
          <Image
            style={styles.profile}
            source={{
              uri: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1704492776~exp=1704493376~hmac=07b3e498beb9e9847b3b303b6e733c203d78452df5b512c24b50a412aaabdab7",
            }}
          />
        </TouchableOpacity>
        <Text style={styles.profileText}>Mrs. Gelila</Text>
        <Text style={{ color: "#ddd" }}>gelila@gmail.com</Text>
      </View>
      <View style={styles.subpart}>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
        >
          <Ionicons name="ios-person-add" size={24} color="black" />
          <Text style={{ marginLeft: 5 }}>New Friend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
        >
          <MaterialIcons name="group" size={24} color="black" />
          <Text style={{ marginLeft: 5 }}>New Group</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
        >
          <Ionicons name="ios-settings-sharp" size={24} color="black" />
          <Text style={{ marginLeft: 5 }}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20, flexDirection: "row", alignItems: "center" }}
        >
          <AntDesign name="questioncircle" size={24} color="black" />
          <Text>Chatting Features</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.modalButton} onPress={onClose}>
        <Ionicons name="arrow-back-circle-outline" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

function ModalContentSearch({ onClose }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  //handlesearch
  const handleSearch =async () => {
    try {
      const response = await axios.get(
        `http://your-backend-url/api/books?query=${query}` // Replace with your backend URL
      );
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }

    connectionRef.current.invoke("Search", query);
  };

  return (
    <View style={styles.modalSearch}>
     <View style={styles.container}>
     <TextInput
          style={styles.input}
          placeholder="Search ..."
          onChangeText={setQuery}
          value={query}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchIconContainer}>
          <Feather name="search" size={24} color="cyan" style={styles.searchIcon} /></TouchableOpacity>
      <FlatList
        style={styles.results}
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.resultItem}>{item.title}</Text>}
      />
    </View>
    </View>
  );
}
export default Header1;

const styles = StyleSheet.create({
  firstHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "#9e9e9e",
  },
  userInfo: {
    marginRight: 10,
  },
  search: {
    marginLeft: 10,
  },
  logotxt: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  modalContent: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  modalButton: {
    display: "flex",
    justifyContent: "center",
    position: "fixed",
    bottom: 1,
    padding: 20,
  },
  modalText: {
    marginBottom: 20,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    padding: 20,
    marginBottom: 20,
  },
  profileMain: {
    backgroundColor: "#9e9e9e",
    width: "100%",
    display: "flex",
    padding: 20,
    justifyContent: "center",
  },

  profileText: {
    color: "white",
    fontSize: 18,
    fontWeight: 900,
  },
  subpart: {
    display: "flex",
    paddingVertical: 10,
  },
  searchbar: {
    flexDirection: "row",
    height: 80,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius:20,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  results: {
    flex: 1,
  },
  resultItem: {
    marginBottom: 8,
  },
  searchIconContainer:{
    marginRight:8,
    marginTop:-50,
    paddingTop:0,
    alignItems:"flex-end"
  }
});
