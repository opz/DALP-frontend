import { combineReducers } from "redux";
import { default as init } from "./init/reducers";
import { default as modals } from "./modals/reducers";
import { default as web3 } from "./web3/reducers";

/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  init,
  modals,
  web3,
});
