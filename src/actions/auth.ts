export const ACTIONS = {
  LOGIN_ACTION: 'LOGIN_ACTION'
}

export const loginUser = (user: any) => (dispatch: Function) => {
  dispatch({
    type: 'LOGIN_ACTION',
    payload: { user }
  })
}