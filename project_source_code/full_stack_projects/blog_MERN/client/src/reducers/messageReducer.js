import { LOAD_MESSAGE, REMOVE_MESSAGE } from "../actions/type";

export default function(state = [], action) {
  switch (action.type) {
    case LOAD_MESSAGE:
      return [ ...action.payload];
    case REMOVE_MESSAGE:
      return state.filter(element => element._id !== action.payload);
    default:
      return state;
  }
}
