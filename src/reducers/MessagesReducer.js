import { UPDATE_MESSAGES, CONCAT_MESSAGE } from "../actions/types";

const INITIAL_STATE = { messages: [] };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MESSAGES:
      return { ...state, messages: action.payload };
    case CONCAT_MESSAGE:
      return { ...state, messages: action.payload.concat(state.messages) };
    default:
      return state;
  }
};
