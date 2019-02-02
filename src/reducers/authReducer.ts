import { ACTIONS } from '../actions/auth';

const initialState = {
  user: null
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case ACTIONS.LOGIN_ACTION:
      return {
        ...state,
        user: action.payload.user
      }
    default:
      return state
  }
}