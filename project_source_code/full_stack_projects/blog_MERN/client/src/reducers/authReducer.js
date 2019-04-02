import { SET_CURRENT_USER } from "../actions/type";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!Object.keys(action.payload).length,
        user: action.payload
      };
    default:
      return state;
  }
}
