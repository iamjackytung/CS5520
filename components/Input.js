import { View, Text, TextInput, Button, Modal } from "react-native";
import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

export default function Input({
  textUpdateFunction,
  modalIsVisible,
  onCancel,
}) {
  const [text, setText] = useState("");
  function updateText() {
    textUpdateFunction(text);
  }
  return (
    <Modal visible={modalIsVisible}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
        ></Image>
        <TextInput
          style={{ backgroundColor: "red", height: 30 }}
          value={text}
          onChangeText={(changedText) => {
            setText(changedText);
          }}
        />
        <Text>{text}</Text>
        <Button
          title="Confirm"
          onPress={() => {
            textUpdateFunction(text);
            onCancel();
          }}
        />
        <Button
          title="Cancel"
          onPress={() => {
            updateText();
          }}
        />
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    margin: 10,
  },
});
