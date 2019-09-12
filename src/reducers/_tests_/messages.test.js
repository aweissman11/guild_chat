import { messages } from '../messages';

describe('messages', () => {
  it('should set messages', () => {
    const mockAction = {
      type: 'SET_MESSAGES',
      messages: ['message one', 'two']
    };
    const expected = mockAction.messages;
    const result = messages(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return default state', () => {
    const expected = [];
    const result = messages(undefined, {});

    expect(result).toEqual(expected);
  });
});