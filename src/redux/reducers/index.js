import { combineReducers } from "redux";
import authReducer from "./auth";
import addProductReducer from "./addproduct";
import getAllProductReducer from "./allproduct";

const reducers = combineReducers({

    auth: authReducer,
    getAllProduct: getAllProductReducer,
    addProduct: addProductReducer,
});

export default reducers;