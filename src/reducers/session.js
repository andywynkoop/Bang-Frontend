import { USER, LOGOUT, JOIN_GAME, REMOVE_PLAYER } from '../actions';

export default (state = null, action) => {
  const { type, payload, _id } = action;
  switch(type) {
    case JOIN_GAME:
      return payload.player._id;
    case USER: 
      return payload.player._id;
    case LOGOUT: 
      return null;
    case REMOVE_PLAYER:
      if (state === _id) return null;
      return state;
    default:
      return state;
  }
}