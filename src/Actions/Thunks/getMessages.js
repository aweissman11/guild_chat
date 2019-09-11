import io from 'socket.io-client';

import { setMessages } from '../'

let socket;

export const getMessages = (messages) => {
  return async (dispatch) => {
    if (!socket) {
      socket = io(':3001')
    }

    socket.emit('chat message', messages);

    dispatch(setMessages(messages))
  }
}