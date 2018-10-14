import { USER, LOGOUT, JOIN_GAME } from '../actions';

export default (state = null, action) => {
  const { type, payload } = action;
  switch(type) {
    case JOIN_GAME:
      return payload.user;
    case USER: 
      return payload.user;
    case LOGOUT: 
      return null;
    default:
      return state;
  }
}