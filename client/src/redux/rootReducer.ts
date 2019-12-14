import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { history } from './history';
import { storage } from '../utils/storage/storage';
import { logout } from './routines';

const reducers = {

}

const appReducer = combineReducers({
  router: connectRouter(history),
  ...reducers
});

const rootReducer = (state: any, action: any) => {
  if (action.type === logout.TRIGGER) {
    storage.remove('accessToken')
    const { routing } = state
    state = { routing, user: { loading: false } };
  }
  return appReducer(state, action);
};

export default rootReducer;
