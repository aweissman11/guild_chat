import { combineReducers } from 'redux';
import { topics } from './topics';
import { messages } from './messages';
import { currentTopic } from './currentTopic';
import { username } from './username';

export const rootReducer = combineReducers({
  topics,
  messages,
  username,
  currentTopic
})