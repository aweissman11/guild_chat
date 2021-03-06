export const messages = (state = [], action) => {
  switch (action.type) {
    case 'SET_MESSAGES':
      return action.messages || []
    case 'ADD_MESSAGE':
      return [
        ...state,
        {
          ...action.newMessage
        }
      ]
    default:
      return state;
  }
}

export default messages;