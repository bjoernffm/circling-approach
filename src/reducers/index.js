import inputDataReducer from "./inputDataReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    input : inputDataReducer
});

export default allReducers;