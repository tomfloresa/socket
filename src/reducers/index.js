import { combineReducers } from "redux";

// Reducers
import SingleChatReducer from "./SingleChatReducer";

export default combineReducers({
    singleChat: SingleChatReducer
});
