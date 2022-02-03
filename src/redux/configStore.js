import dictionary from "./modules/dictionary";
import thunk from "redux-thunk";

import { createStore, combineReducers, applyMiddleware } from "redux";

const rootReducer = combineReducers({ dictionary });

const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
