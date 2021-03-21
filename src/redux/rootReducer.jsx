import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer";

const allReducers = combineReducers({
  shop: shopReducer
});

export default allReducers;
