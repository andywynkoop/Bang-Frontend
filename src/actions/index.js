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
export const GAME = "GAME";
export const JOIN_GAME = "JOIN_GAME";

export const createGame = () => dispatch => 
  mancato.post('http://localhost:3001/game')
    .then(game => dispatch({ type: GAME, game }));

export const joinGame = _id => dispatch => 
  mancato.patch('http://localhost:3001/game', { _id })
    .then(payload => dispatch({ type: JOIN_GAME, payload }));

// players
export const PLAYERS = "PLAYERS";
export const REMOVE_PLAYER = "REMOVE_PLAYER";