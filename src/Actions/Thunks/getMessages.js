import { setMessages } from '../'

export const getMessages = (messages = []) => {
  return async (dispatch) => {
    dispatch(setMessages(messages))
  }
}