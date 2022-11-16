import http from "utils/http";
import * as types from "./sample-reducer/type";

export const get = (payload) => {
  const { url, config } = payload ?? {};
  return (dispatch) => {
    http.get(url, config ?? {}).then((res) => {
      dispatch(addTodoSuccess(res.data));
    });
  };
};

const addTodoSuccess = (todo) => ({
  type: types.SET_MISSION_DATA,
  payload: {
    todo,
  },
});
