import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Button,
  StatusBar,
  AsyncStorage,
  Alert
} from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Actions } from "react-native-router-flux";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

import Router from "./Router";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#05093E",
    padding: 20,
    paddingTop: 40
  }
});
