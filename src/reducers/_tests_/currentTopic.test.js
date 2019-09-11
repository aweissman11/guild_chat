import { currentTopic } from '../currentTopic';

describe('currentTopic', () => {
  it('should set currentTopic', () => {
    const mockAction = {
      type: 'SET_CURRENT_TOPIC',
      currentTopic: 'topic one'
    };
    const expected = mockAction.currentTopic;
    const result = currentTopic(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return default state', () => {
    const expected = '';
    const result = currentTopic(undefined, {});

    expect(result).toEqual(expected);
  });
});