/*
 * initialize game state observers
 */
GameState = require( "../GameState" );
let project_path = "C:\\Users\\EG\\Desktop\\2022\\june\\2nd_week\\tennis_cpp\\game_state_data\\";
let game_state_path = project_path + "game_state_data.txt"; 
let gameState = new GameState( game_state_path );

setInterval( () => { gameState.update(); }, 1000 );
