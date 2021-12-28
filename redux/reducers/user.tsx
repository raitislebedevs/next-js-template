import * as Types from "../actionTypes";

const initialState = {
  currrency: "$",
  user: {},
  userInfo: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case Types.SET_USER:
      return { ...state, user: action.value };
    case Types.SET_USER_INFO:
      return { ...state, userInfo: action.value };
  }
  return state;
};

export default user;
