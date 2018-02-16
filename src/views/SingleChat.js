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

// Actions
import { updateMessages, concatMessage } from "../actions";

class SingleChat extends Component {
  constructor(props) {
    super(props);

    this.onReceivedMessage.bind(this);
    this.updateWithNewMessage.bind(this);

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient("http://localhost:3000");

    // When the messages action is emitted from server, execute the onReceivedMessage function
    this.socket.on("messages", this.onReceivedMessage);

    this.socket.on("message", this.updateWithNewMessage)

    this.socket.emit("getMessages", null); 
  }

  // Send a message to server
  onSend = message => {
    this.socket.emit("message", message[0]);

    this.props.concatMessage(message);
  };

  // When messages are received from server, execute and action and update redux state
  onReceivedMessage = messages => {
    this.props.updateMessages(messages);
  };

  updateWithNewMessage = message => {
    this.props.concatMessage(message);
  }

  render() {
    const { messages } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <GiftedChat
          messages={messages.messages}
          keyboardAppearance={ 'dark' }
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
    flex: 1
  }
});

const mapStateToProps = (state, ownProps) => {
  const { messages } = state;

  return { messages };
};

export default connect(mapStateToProps, { updateMessages, concatMessage })(
  SingleChat
);
