import { combineReducers } from "redux";
import { cartreducer } from "./reducercart";
import { favreducer } from "./reducerfav";
import { authreducer } from "./reducerauth";
import fetchreducer from "./reducerfetch";

const rootred = combineReducers({
  cartreducer,
  favreducer,
  authreducer,
  data: fetchreducer,
});

export default rootred;
