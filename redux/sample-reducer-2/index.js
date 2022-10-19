import * as Type from "./type";

const initialState = {
  mission_data: null,
};

const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case Type.SET_MISSION_DATA:
      return { ...state, mission_data: payload };

    default:
      return state;
  }
};

export default reducer;
export * from "./type";
