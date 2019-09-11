export const currentTopic = (state = '', action) => {
  switch (action.type) {
    case 'SET_CURRENT_TOPIC':
      return action.currentTopic;
    default:
      return state;
  }
}

export default currentTopic;