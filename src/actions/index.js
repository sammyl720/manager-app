import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types'
export const emailChanged = (text) => {
  // console.log('email changed action creater called', EMAIL_CHANGED)
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}
