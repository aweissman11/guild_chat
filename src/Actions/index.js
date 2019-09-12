export const setTopics = (topics) => {
  return {
    type: 'SET_TOPICS',
    topics
  }
}

export const addTopic = (newTopic) => {
  return {
    type: 'ADD_TOPIC',
    newTopic
  }
}

export const addMessage = (newMessage) => {
  return {
    type: 'ADD_MESSAGE',
    newMessage
  }
}

export const setMessages = (messages) => {
  return {
    type: 'SET_MESSAGES',
    messages
  }
}

export const setCurrentTopic = (currentTopic) => {
  return {
    type: 'SET_CURRENT_TOPIC',
    currentTopic
  }
}
export const setUsername = (username) => {
  return {
    type: 'SET_USERNAME',
    username
  }
}

