import {
    UPDATE_MESSAGES
} from "./types";

import API_BASE from "../constants";

import axios from "axios";

export const updateMessages = specialty => {
    return async dispatch => {
      axios
        .get(`${API_BASE}`)
        .then(response => {
            dispatch({
                type: UPDATE_MESSAGES,
                payload: response.data
              });
        })
        .catch(error => console.log(error));
    };
  };