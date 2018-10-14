import { combineReducers } from 'redux';
import session from './session';
import game from './game';

export default combineReducers({
  session,
  game
});