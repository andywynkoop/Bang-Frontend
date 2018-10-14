import { USER, LOGOUT } from '../actions';

export default (state=null, action) => {
  const { type, user } = action;
  switch(type) {
    case USER:
      return user;
    case LOGOUT: 
      return null;
    default:
      return state;
  }
}