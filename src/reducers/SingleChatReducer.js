import { UPDATE_SINGLE_CHAT } from "../actions/types";

const INITIAL_STATE = { withUserId: null };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SINGLE_CHAT:
      return { ...state, [action.prop]: [action.value] };
    default:
      return state;
  }
};
