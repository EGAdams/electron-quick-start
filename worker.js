//address of native addon 
const addon = require('../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node');
const ButtonState = require('./ButtonState');
//communicating with main process of electron app.
console.log( "entered worker.js" );
let iterations = 0;
const PLAYER_BUTTONS = 202;
const buttonState = new ButtonState( PLAYER_BUTTONS );
var cppInterface = new addon.CppInterface( 42 );
cppInterface.digitalWrite( 38,              1    );  // RESET
cppInterface.digitalWrite( 26,              1    );  // UNDO
cppInterface.digitalWrite( PLAYER_BUTTONS,  2000 );  // PLAYER_BUTTONS
while ( iterations < 3 ) {
    if ( cppInterface.digitalRead( PLAYER_BUTTONS ) < 2000 ) {
        console.log( "pin PLAYER_BUTTONS is low!" );
        exit( 0 ); }    
    cppInterface.gameLoop();
    postMessage( cppInterface.getPinState() );
}  
// worker.terminate();
