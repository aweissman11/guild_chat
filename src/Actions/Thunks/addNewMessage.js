import { addMessage } from '..'

// import { mockWordCloudData } from './__mocks__/mockWordCloudData';

export const addNewMessage = (newMessage) => {
  return async (dispatch) => {
    dispatch(addMessage(newMessage))
  }
}