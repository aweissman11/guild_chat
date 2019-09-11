import { addNewTopic } from '../addNewTopic';
import { addTopic } from '../..';

describe('addNewTopic', () => {
  it('should add a new topic', () => {
    const mockDispatch = jest.fn();
    const thunk = addNewTopic('topic');
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addTopic('topic'));

  });
});