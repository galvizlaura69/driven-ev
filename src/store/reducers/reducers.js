import { combineReducers } from 'redux';

import counter from './counter';
import test from './test';

export default combineReducers({
  counter, test
});