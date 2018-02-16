import { UPDATE_MESSAGES, CONCAT_MESSAGE } from "./types";

import API_BASE from "../constants";

import axios from "axios";

export const updateMessages = messages => {
  return {
    type: UPDATE_MESSAGES,
    payload: messages
  };
};

export const concatMessage = message => {
  return {
    type: CONCAT_MESSAGE,
    payload: message
  };
};
