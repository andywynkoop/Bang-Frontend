import { GAME, JOIN_GAME, USER, LOGOUT, NEW_GAME } from '../actions';

export default (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case NEW_GAME:
      return payload.game;
    case GAME:
      return payload.game;
    case JOIN_GAME, USER:
      return payload.game;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}