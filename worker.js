//address of native addon 
const { Event } = require( 'jquery' );
const addon = require('../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node');
//communicating with main process of electron app.
console.log( "entered worker.js" );
let iterations = 0;
const PLAYER_BUTTONS = 202;
var cppInterface = new addon.CppInterface( 42 );
cppInterface.digitalWrite( 38,              1    );  // RESET
cppInterface.digitalWrite( 26,              1    );  // UNDO
cppInterface.digitalWrite( PLAYER_BUTTONS,  2000 );  // PLAYER_BUTTONS
onmessage = function ( event ) {
    console.log( "worker.onmessage: " + event.data );
    if ( event.data.command === 'digitalWrite' ) {
        cppInterface.digitalWrite( event.data.pin_name, event.data.pin_value );
        if ( event.data.release_value ) {    
            loop( 1 );
            cppInterface.digitalWrite( event.data.pin_name, event.data.release_value );
        }
        loop( 1 )
    }
}
loop( 1 );

function loop( numberOfLoops ) {
    console.log( "entering while loop..." );
    iterations = 0;
    while ( iterations < numberOfLoops ) {
        if ( cppInterface.digitalRead( PLAYER_BUTTONS ) < 1000 ) {
            console.log( "pin PLAYER_BUTTONS is low!" ); 
        } else {
            console.log( "pin PLAYER_BUTTONS is back to normal." );
        }    
        cppInterface.gameLoop();
        postMessage( cppInterface.getPinState() );
        iterations++;
    } 
}





