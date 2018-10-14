import { GAME } from '../actions';

export default (state = null, action) => {
  const { type, game } = action;
  switch (type) {
    case GAME:
      return game;
    default:
      return state;
  }
}