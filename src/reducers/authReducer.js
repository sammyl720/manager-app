import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types'

const INITAIL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: ''
}
export default (state = INITAIL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {
        ...state,
        email: action.payload
      }
    case PASSWORD_CHANGED:
      return {
        ...state,
        password: action.payload
      }
    default:
      return state
  }
}
