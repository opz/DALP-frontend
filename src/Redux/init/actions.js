import {createActions} from 'reduxsauce';

const {
  Types,Creators
} = createActions({
  initStart: null,
  initSuccess: null,
  reset: null,
  failure: ['error']
}, {prefix: "init."});

export {
  Types,
  Creators
}
