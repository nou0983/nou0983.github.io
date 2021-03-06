import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer"
import messageReducer from "./messageReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  messages: messageReducer,
  form: formReducer
});
