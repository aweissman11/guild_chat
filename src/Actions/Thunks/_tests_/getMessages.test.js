import { getMessages } from '../getMessages';
import { setMessages } from '../..';

describe('getMessages', () => {
  it('should get a new message', () => {
    const mockDispatch = jest.fn();
    const thunk = getMessages(['message']);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setMessages(['message']));

  });
});