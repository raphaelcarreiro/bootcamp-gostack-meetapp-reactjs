import { combineReducers } from 'redux';

import auth from 'store/modules/auth/reducer';
import user from 'store/modules/user/reducer';

const reducers = combineReducers({
  auth,
  user,
});

export default reducers;
