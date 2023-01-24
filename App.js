import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import { Button } from "react-native";

export default App = () => {
  const name = "CS 5520";
  const [enteredText, setEnteredText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  function onTextEnter(changedText) {
    setEnteredText(changedText);
    setModalVisible(false);
  }
  function onCancel() {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <Header appName={name} />
      <Button title="Add task" onPress={() => setModalVisible(true)}></Button>
      <StatusBar style="auto" />
      <Input
        modalIsVisible={modalVisible}
        textUpdateFunction={onTextEnter}
        onCancel={onCancel}
      />
      {/* <Text>Welcome to {name}'s website!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
