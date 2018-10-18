import { NEW_GAME, GAME, JOIN_GAME, USER, PLAYERS, REMOVE_PLAYER, RECEIVE_PLAYER } from '../actions/';

export default (state = [], action) => {
  const { type, players, _id, payload } = action;
  let player;
  if (payload) {
    player = payload.player;
  }
  switch(type) {
    case NEW_GAME: 
      return Object.assign({}, state, { [player._id]: player });
    case GAME:
      return payload.players;
    case JOIN_GAME:
      return Object.assign({}, state, { [player._id]: player });
    case USER:
      return Object.assign({}, state, { [player._id]: player });
    case RECEIVE_PLAYER:
      return Object.assign({}, state, { [player._id]: player });
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