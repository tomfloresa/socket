import { combineReducers } from "redux";

// Reducers
import SingleChatReducer from "./SingleChatReducer";
import MessagesReducer from "./MessagesReducer";

export default combineReducers({
    singleChat: SingleChatReducer,
    messages: MessagesReducer
});
