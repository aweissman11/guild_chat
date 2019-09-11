import { getTopics } from '../getTopics';
import { setTopics } from '../..';

describe('getTopics', () => {
  it('should get a topics', () => {
    const mockDispatch = jest.fn();
    const thunk = getTopics(['topic']);
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(setTopics(['topic']));

  });
});