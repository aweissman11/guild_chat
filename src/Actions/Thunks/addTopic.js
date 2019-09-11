import { addTopic } from '../'

// import { mockWordCloudData } from './__mocks__/mockWordCloudData';

export const addNewTopic = (newTopic) => {
  return async (dispatch) => {
    dispatch(addTopic(newTopic))
  }
}