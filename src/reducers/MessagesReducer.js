import { UPDATE_MESSAGES } from "../actions/types";

const INITIAL_STATE = { messages: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};
