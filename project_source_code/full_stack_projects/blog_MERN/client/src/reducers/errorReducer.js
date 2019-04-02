import { ADD_ERROR, REMOVE_ERROR } from "../actions/type";

export default function(state = { message: null }, action) {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.payload };
    case REMOVE_ERROR:
      return { ...state, message: null };
    default:
      return state;
  }
}
