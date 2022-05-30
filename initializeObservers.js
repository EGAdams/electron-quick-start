/*
 * entry point
 */
const PinState = require( '../PinState' );
let ledObservers = new Subject();

let p1_points_led1 = new GameLed( "P1_POINTS_LED1", "green_point_1", "led-green-on", "led-green-off" ); 
let p1_points_led2 = new GameLed( "P1_POINTS_LED2", "green_point_2", "led-green-on", "led-green-off" ); 
let p1_points_led3 = new GameLed( "P1_POINTS_LED3", "green_point_3", "led-green-on", "led-green-off" ); 
let p1_points_led4 = new GameLed( "P1_POINTS_LED4", "green_point_4", "led-green-on", "led-green-off" ); 

let p2_points_led1 = new GameLed( "P2_POINTS_LED1", "red_point_1", "led-red-on", "led-red-off" ); 
let p2_points_led2 = new GameLed( "P2_POINTS_LED2", "red_point_2", "led-red-on", "led-red-off" ); 
let p2_points_led3 = new GameLed( "P2_POINTS_LED3", "red_point_3", "led-red-on", "led-red-off" ); 
let p2_points_led4 = new GameLed( "P2_POINTS_LED4", "red_point_4", "led-red-on", "led-red-off" ); 

let p1_orange_serve_led = new GameLed( "P1_SERVE", "orange_top_serve_1", "led-orange-serve-on", "led-orange-serve-off" );
let p2_orange_serve_led = new GameLed( "P2_SERVE", "orange_top_serve_2", "led-orange-serve-on", "led-orange-serve-off" );

let p1_games_led0 = new GameLed( "P1_GAMES_LED0", "red_game_1", "led-green-on", "led-green-off" );
let p1_games_led1 = new GameLed( "P1_GAMES_LED1", "red_game_2", "led-green-on", "led-green-off" );
let p1_games_led2 = new GameLed( "P1_GAMES_LED2", "red_game_3", "led-green-on", "led-green-off" );
let p1_games_led3 = new GameLed( "P1_GAMES_LED3", "red_game_4", "led-green-on", "led-green-off" );
let p1_games_led4 = new GameLed( "P1_GAMES_LED4", "red_game_5", "led-green-on", "led-green-off" );
let p1_games_led5 = new GameLed( "P1_GAMES_LED5", "red_game_6", "led-green-on", "led-green-off" );
let p1_games_led6 = new GameLed( "P1_GAMES_LED6", "red_game_7", "led-green-on", "led-green-off" );

let p2_games_led0 = new GameLed( "P2_GAMES_LED0", "green_game_1", "led-red-on", "led-red-off" );
let p2_games_led1 = new GameLed( "P2_GAMES_LED1", "green_game_2", "led-red-on", "led-red-off" );
let p2_games_led2 = new GameLed( "P2_GAMES_LED2", "green_game_3", "led-red-on", "led-red-off" );
let p2_games_led3 = new GameLed( "P2_GAMES_LED3", "green_game_4", "led-red-on", "led-red-off" );
let p2_games_led4 = new GameLed( "P2_GAMES_LED4", "green_game_5", "led-red-on", "led-red-off" );
let p2_games_led5 = new GameLed( "P2_GAMES_LED5", "green_game_6", "led-red-on", "led-red-off" );
let p2_games_led6 = new GameLed( "P2_GAMES_LED6", "green_game_7", "led-red-on", "led-red-off" );

let p1_sets_led1 = new GameLed( "P1_SETS_LED1", "yellow_led_1", "led-yellow-on", "led-yellow-off" );
let p1_sets_led2 = new GameLed( "P1_SETS_LED2", "orange_led_1", "led-orange-on", "led-orange-off" );    
let p2_sets_led1 = new GameLed( "P2_SETS_LED1", "yellow_led_2", "led-yellow-on", "led-yellow-off" );
let p2_sets_led2 = new GameLed( "P2_SETS_LED2", "orange_led_2", "led-orange-on", "led-orange-off" );

let p1_tiebreaker = new GameLed( "P1_TIEBREAKER", "blue_led_1", "led-blue-on", "led-blue-off" );
let p2_tiebreaker = new GameLed( "P2_TIEBREAKER", "blue_led_2", "led-blue-on", "led-blue-off" );

ledObservers.addObserver( p1_points_led1 );
ledObservers.addObserver( p1_points_led2 );
ledObservers.addObserver( p1_points_led3 );
ledObservers.addObserver( p1_points_led4 );
ledObservers.addObserver( p2_points_led1 );
ledObservers.addObserver( p2_points_led2 );
ledObservers.addObserver( p2_points_led3 );
ledObservers.addObserver( p2_points_led4 );
ledObservers.addObserver( p1_orange_serve_led );
ledObservers.addObserver( p2_orange_serve_led );
ledObservers.addObserver( p1_games_led0 );
ledObservers.addObserver( p1_games_led1 );
ledObservers.addObserver( p1_games_led2 );
ledObservers.addObserver( p1_games_led3 );
ledObservers.addObserver( p1_games_led4 );
ledObservers.addObserver( p1_games_led5 );
ledObservers.addObserver( p1_games_led6 );
ledObservers.addObserver( p2_games_led0 );
ledObservers.addObserver( p2_games_led1 );
ledObservers.addObserver( p2_games_led2 );
ledObservers.addObserver( p2_games_led3 );
ledObservers.addObserver( p2_games_led4 );
ledObservers.addObserver( p2_games_led5 );
ledObservers.addObserver( p2_games_led6 );
ledObservers.addObserver( p1_sets_led1 );
ledObservers.addObserver( p1_sets_led2 );
ledObservers.addObserver( p2_sets_led1 );
ledObservers.addObserver( p2_sets_led2 );
ledObservers.addObserver( p1_tiebreaker );
ledObservers.addObserver( p2_tiebreaker );

console.log( "starting update timer..." );
let pinState = new PinState( ledObservers );
setInterval( function () { pinState.updateLedPinData(); }, 250 );
