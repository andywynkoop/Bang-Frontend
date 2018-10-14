import { GAME, JOIN_GAME, USER, LOGOUT } from '../actions';

export default (state = null, action) => {
  const { type, game, payload } = action;
  switch (type) {
    case GAME:
    return game;
    case JOIN_GAME, USER:
      return payload.game;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}