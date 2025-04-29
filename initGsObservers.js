/*
 * initialize game state observers
 */
const GAME_STATE_DATA_PATH = "C:\\Users\\NewUser\\tennis_cpp\\game_state_data\\game_state_data.txt";
// const GAME_STATE_DATA_PATH = "/mnt/c/Users/NewUser/tennis_cpp/game_state_data/game_state_data.txt";
GameState = require( "../GameState" );
let gameState = new GameState( GAME_STATE_DATA_PATH );
setInterval( () => { gameState.update(); }, 1000 );
