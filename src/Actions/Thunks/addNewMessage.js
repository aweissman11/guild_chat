import io from 'socket.io-client';

import { addMessage } from '../';

let socket;

export const addNewMessage = (newMessage) => {
  return async (dispatch) => {
    if (!socket) {
      socket = io(':3001')
      socket.on('chat message', function (msg) {
        dispatch(addMessage(msg))
      });
    }

    socket.emit('chat message', newMessage);
  }
}


