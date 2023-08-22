import {combineReducers} from "redux";
import { cartreducer } from "./reducercart";
import { favreducer } from "./reducerfav";
import { authreducer } from "./reducerauth";


const rootred = combineReducers({
    cartreducer,favreducer,authreducer

});


export default rootred