import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class SingleChat extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
        </KeyboardAwareScrollView>
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

const mapStateToProps = (state, ownProps) => {
  const { email, password, isSignedIn } = state.session;

  return { email, password, isSignedIn, buttonDisabled: true };
};

export default connect(null, null)(SingleChat);
