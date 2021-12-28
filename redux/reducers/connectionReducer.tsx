import * as TYPES from "../actionTypes";

const initialState = {
  isLogged: false,
  user: null,
  isLoadingUser: false,
  isLoadingRouter: false,
};
// Initiali settups and then we set these as a global state for users....
const connectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLogged: true,
        isLoadingUser: true,
      };
    case TYPES.LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: null,
        isLoadingUser: false,
      };
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case TYPES.SET_LOADING_USER:
      return {
        ...state,
        isLoadingUser: action.isLoadingUser,
      };
    case TYPES.SET_LOADING_ROUTER:
      return {
        ...state,
        isLoadingRouter: action.isLoadingRouter,
      };
    default:
      return state;
  }
};

export default connectionReducer;
