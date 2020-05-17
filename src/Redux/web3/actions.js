import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  initStart: null,
  initSuccess: ['provider', 'account'],
  reset: null,
  failure: ['error']
}, {prefix: "web3."});

export {
  Types,
  Creators
}
