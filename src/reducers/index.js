import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposeErrorReducer from "./auth/errorReducer";
import authReducer from "./auth/authReducer";
import authMenuReducer from "./auth/authMenuReducer";
import appearanceReducer from "./auth/appearanceReducer";
import loadingReducer from "./hud/loadingReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    //-----------AUTH---------------//
    redErrorAuth: reposeErrorReducer,
    redAuth: authReducer,
    appearanceReducer: appearanceReducer,
    loadingReducer: loadingReducer,
    authMenuReducer: authMenuReducer
    //-----------AUTH-END-----------//
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
