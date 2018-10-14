// session
export const USER = "USER";
export const LOGOUT = "LOGOUT";

export const loginUser = user => dispatch => 
  mancato.post('http://localhost:3001/session', user)
    .then(user => dispatch({ type: USER, user }));

export const logoutUser = () => dispatch => 
  mancato.delete('http://localhost:3001/session')
    .then(() => dispatch({ type: LOGOUT }));

// game
export const GAME = "GAME";

export const createGame = () => dispatch => 
  mancato.post('http://localhost:3001/game')
    .then(game => dispatch({ type: GAME, game }));