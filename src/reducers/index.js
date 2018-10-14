import { combineReducers } from 'redux';
import session from './session';
import game from './game';
import players from './players';

export default combineReducers({
  session,
  game,
  players
});