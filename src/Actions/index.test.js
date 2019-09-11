import * as Actions from './';

describe('actions', () => {
  it('should have a type of SET_TOPICS', () => {
    const topics = ['one', 'two'];
    const expected = {
      type: 'SET_TOPICS',
      topics
    }
    const result = Actions.setTopics(topics);
    expect(result).toEqual(expected)
  });

  it('should have a type of ADD_TOPIC', () => {
    const newTopic = 'new topic';
    const expected = {
      type: 'ADD_TOPIC',
      newTopic
    }
    const result = Actions.addTopic(newTopic);
    expect(result).toEqual(expected)
  });

  it('should have a type of ADD_MESSAGE', () => {
    const newMessage = {
      from: 'Aaron',
      text: 'hello',
      topic: 'topic one'
    };
    const expected = {
      type: 'ADD_MESSAGE',
      newMessage
    }
    const result = Actions.addMessage(newMessage);
    expect(result).toEqual(expected)
  });

  it('should have a type of SET_MESSAGES', () => {
    const messages = [
      {
        from: 'Aaron',
        text: 'hello',
        topic: 'topic one'
      },
      {
        from: 'Chelsey',
        text: 'hi',
        topic: 'topic two'
      }
    ];
    const expected = {
      type: 'SET_MESSAGES',
      messages
    }
    const result = Actions.setMessages(messages);
    expect(result).toEqual(expected)
  });

  it('should have a type of SET_CURRENT_TOPIC', () => {
    const currentTopic = 'current topic';
    const expected = {
      type: 'SET_CURRENT_TOPIC',
      currentTopic
    }
    const result = Actions.setCurrentTopic(currentTopic);
    expect(result).toEqual(expected)
  });

  it('should have a type of SET_USERNAME', () => {
    const username = 'Aaron';
    const expected = {
      type: 'SET_USERNAME',
      username
    }
    const result = Actions.setUsername(username);
    expect(result).toEqual(expected)
  });
});