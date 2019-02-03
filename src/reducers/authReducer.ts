import { ACTIONS } from '../actions/auth';
import { REHYDRATE } from 'redux-persist';
import AuthUser from '../auth';

const initialState = {
  user: null
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.authReducer) {
        AuthUser.setUser(action.payload.authReducer.user);
        return {
          ...state,
          user: action.payload.authReducer.user
        };
      }
      break;
    case ACTIONS.LOGIN_ACTION:
      AuthUser.setUser(state.user);
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}