import { addTopic } from '..'

export const addNewTopic = (newTopic) => {
  return async (dispatch) => {
    dispatch(addTopic(newTopic))
  }
}
