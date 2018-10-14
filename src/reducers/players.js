import { PLAYERS, REMOVE_PLAYER } from '../actions/';

export default (state = [], action) => {
  const { type, players, _id } = action;
  switch(type) {
    case PLAYERS:
      return players;
    case REMOVE_PLAYER:
      let newState = Object.assign({}, state);
      delete newState[_id];
      return newState;
    default: 
      return state;
  }
}