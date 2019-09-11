import { topics } from '../topics';

describe('topics', () => {
  it('should set topics', () => {
    const mockAction = {
      type: 'SET_TOPICS',
      topics: ['topic one', 'two']
    };
    const expected = mockAction.topics;
    const result = topics(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return default state', () => {
    const expected = [];
    const result = topics(undefined, {});

    expect(result).toEqual(expected);
  });
});