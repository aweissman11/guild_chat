import { username } from '../username';

describe('username', () => {
  it('should set username', () => {
    const mockAction = {
      type: 'SET_USERNAME',
      username: 'username'
    };
    const expected = mockAction.username;
    const result = username(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return default state', () => {
    const expected = '';
    const result = username(undefined, {});

    expect(result).toEqual(expected);
  });
});