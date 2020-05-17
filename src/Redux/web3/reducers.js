import {Types} from './actions';
import {createReducer} from 'reduxsauce';

const INIT = {
    loading: false,
    error: null,
    account: null,
    provider: null
}

const start = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        account: action.account,
        provider: action.provider
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}


const HANDLERS = {
    [Types.INIT_SUCCESS]: start,
    [Types.FAILURE]: fail
  }
  
  export default createReducer(INIT, HANDLERS);