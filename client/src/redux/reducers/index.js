import { productReducer } from "./ProductReducer";
import {AuthReducer} from "./AuthReducer";
import {ActionReducer} from "./ActionReducer";
import {combineReducers} from 'redux'
const reducers =combineReducers({
     allProducts:productReducer,
     auth:AuthReducer,
     action:ActionReducer,
}) 
export default reducers