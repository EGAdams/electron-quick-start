/*
 * initialize game state observers
 */
const GAME_STATE_DATA_PATH = "C:\\Users\\EG\\Desktop\\2022\\june\\2nd_week\\tennis_cpp\\game_state_data\\game_state_data.txt";
GameState = require( "../GameState" );
let gameState = new GameState( GAME_STATE_DATA_PATH );
setInterval( () => { gameState.update(); }, 1000 );
