import mancato from '../tmp';
// session
export const USER = "USER";
export const LOGOUT = "LOGOUT";

export const loginUser = user => dispatch => 
  mancato.post('http://localhost:3001/session', user)
    .then(payload => dispatch({ type: USER, payload }));

export const logoutUser = () => dispatch => 
  mancato.delete('http://localhost:3001/session')
    .then(() => dispatch({ type: LOGOUT }));

// game
export const NEW_GAME = "NEW_GAME";
export const GAME = "GAME";
export const JOIN_GAME = "JOIN_GAME";

export const createGame = () => dispatch => 
  mancato.post('http://localhost:3001/game')
    .then(payload => dispatch({ type: NEW_GAME, payload }));

export const joinGame = _id => dispatch => 
  mancato.patch('http://localhost:3001/game/join', { _id })
    .then(payload => dispatch({ type: JOIN_GAME, payload }));

export const startGame = _id => dispatch => 
  mancato.patch('http://localhost:3001/game/start', { _id })
    .then(payload => dispatch({ type: GAME, payload }));
    
// players
export const PLAYERS = "PLAYERS";
export const REMOVE_PLAYER = "REMOVE_PLAYER";
export const RECEIVE_PLAYER = "RECEIVE_PLAYER";

export const updateAvatar = data => dispatch =>
  mancato.patch('http://localhost:3001/players', data)
    .then(payload => dispatch({ type: RECEIVE_PLAYER, payload }));