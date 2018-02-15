// @flow
import React from "react";
import { Scene, Router, Modal, Actions } from "react-native-router-flux";

import { SingleChat } from "./views";

const RouterComponent = () => {
  return (
    <Router>
      <Scene
        key="root"
        hideNavBar
        tabBarStyle={{
          backgroundColor: "#5B6DFE"
        }}
        swipeEnabled={true}
        activeTintColor={"#FFFFFF"}
      >
        <Scene key="login" component={SingleChat} initial hideNavBar />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
