export const topics = (state = [], action) => {
  switch (action.type) {
    case 'SET_TOPICS':
      return action.topics;
    case 'ADD_TOPIC':
      return [
        ...state,
        action.newTopic
      ]
    default:
      return state;
  }
}

export default topics;