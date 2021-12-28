import { combineReducers } from "redux";
import loader from "./loader";
import user from "./user";
import theme from "./theme";
import connectionReducer from "./connectionReducer"

const rootReducer = combineReducers({
  connectionReducer,
  loader,
  user,
  theme,
});

export default rootReducer;
