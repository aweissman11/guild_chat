import { setTopics } from '../'

// import { mockWordCloudData } from './__mocks__/mockWordCloudData';

export const getTopics = (topics = []) => {
  return async (dispatch) => {
    dispatch(setTopics(topics))
  }
}