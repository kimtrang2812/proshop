import { combineReducers } from "redux";
import { signinReducer, signupReducer } from "./authReducer";

const rootReducer = combineReducers({
    signinReducer: signinReducer,
    signupReducer: signupReducer
});

export default rootReducer;