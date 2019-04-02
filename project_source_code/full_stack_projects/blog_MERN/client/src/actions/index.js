import {
  SET_CURRENT_USER,
  ADD_ERROR,
  REMOVE_ERROR,
  LOAD_MESSAGE,
  REMOVE_MESSAGE
} from "./type";
import axios from "axios";
import history from "../history";

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  };
};

export const authUser = (formProps, type) => async dispatch => {
  try {
    const response = await axios.post(`/api/auth/${type}`, formProps);
    dispatch(setCurrentUser(response.data));
    localStorage.setItem("token", response.data.token);
    dispatch(removeError());
    history.push("/");
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const signOut = () => {
  localStorage.clear();
  history.push("/");
  return setCurrentUser({});
};

export const addError = error => ({
  type: ADD_ERROR,
  payload: error
});

export const removeError = () => ({
  type: REMOVE_ERROR
});

export const fetchMessages = () => async (dispatch, getState) => {
  try {
    let { auth } = getState();
    const id = auth.user.userId;
    const response = await axios.get(`/api/users/${id}/messages`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
    dispatch(load(response.data));
    dispatch(removeError());
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const load = messages => ({
  type: LOAD_MESSAGE,
  payload: messages
});

export const createMessage = formProps => async (dispatch, getState) => {
  try {
    let { auth } = getState();
    const id = auth.user.userId;
    await axios.post(`/api/users/${id}/messages`, formProps, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
    history.push(`/users/${id}/messages`);
    dispatch(removeError());
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const remove = id => ({
  type: REMOVE_MESSAGE,
  payload: id
});

export const getMessage = (user_id, message_id) => async dispatch => {
  try {
    const response = await axios.get(
      `/api/users/${user_id}/messages/${message_id}`,
      {
        headers: {
          authorization: localStorage.getItem("token")
        }
      }
    );
    dispatch(removeError());
    return response.data;
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const removeMessage = (user_id, message_id) => async dispatch => {
  try {
    await axios.delete(`/api/users/${user_id}/messages/${message_id}`, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
    dispatch(remove(message_id));
    dispatch(removeError());
    history.push(`/users/${user_id}/messages`);
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const editMessage = (
  formProps,
  user_id,
  message_id
) => async dispatch => {
  try {
    await axios.put(`/api/users/${user_id}/messages/${message_id}`, formProps, {
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
    dispatch(removeError());
    history.push(`/users/${user_id}/messages`);
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};

export const createComment = (
  formProps,
  currentUser_id,
  message_id,
  user_id
) => async dispatch => {
  try {
    await axios.post(
      `/api/users/${currentUser_id}/messages/${message_id}/comments`,
      formProps,
      {
        headers: {
          authorization: localStorage.getItem("token")
        }
      }
    );
    dispatch(removeError());
    history.push(`/users/${user_id}/messages/${message_id}`);
  } catch (err) {
    dispatch(addError(err.response.data.message));
  }
};
