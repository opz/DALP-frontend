import { Creators } from "./actions";
import { default as web3Ops } from "Redux/web3/operations";

const initWallet = async (props) => {
  return props.dispatch(web3Ops.init()).then(() => props);
};

const start = () => (dispatch, getState) => {
  let state = getState();
  if (state.init.initComplete) {
    return;
  }

  return dispatch(_doStart());
};

const _doStart = () => (dispatch, getState) => {
  dispatch(Creators.initStart());
  let props = {
    dispatch,
    getState,
  };

  return initStorage(props)
    .then(initWallet)
    .then((props) => {
      dispatch(Creators.initSuccess());
    });
};

const reset = () => (dispatch) => {
  dispatch(Creators.reset());
};

export default {
  start,
  reset,
};
