import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SocketIOClient from "socket.io-client";

import { GiftedChat } from "react-native-gifted-chat";

class SingleChat extends Component {
  constructor(props) {
    super(props);

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient("ws://127.0.0.1:3000");
  }

  onSend = message => {
    console.log(message);
    this.socket.emit("message", message[0]);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <GiftedChat
          messages={null}
          onSend={message => this.onSend(message)}
          user={{
            _id: 1
          }}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5B6DFE",
    padding: 20,
    paddingTop: 40,
    justifyContent: "center"
  },
  loginHolder: {
    marginTop: 260
  },
  button: {
    backgroundColor: "#07F0C3",
    height: 40,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  buttonDisabled: {
    backgroundColor: "gray",
    height: 40,
    marginLeft: 8,
    marginRight: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    padding: 8
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    color: "white",
    fontSize: 22
  }
});

export default connect(null, null)(SingleChat);
