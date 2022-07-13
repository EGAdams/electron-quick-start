//address of native addon 
const { Event } = require( 'jquery' );
const addon = require( 'C:\\Users\\EG\\Desktop\\2022\\june\\2nd_week\\tennis_cpp\\build\\Release\\addon.node' );
//communicating with main process of electron app.
console.log( "entered worker.js" );
let iterations = 0;
const PLAYER_BUTTONS = 202;
let cppInterface = new addon.CppInterface( 42 );
cppInterface.digitalWrite( 38,              1    ); // RESET
cppInterface.digitalWrite( 39,              1    ); // UNDO
cppInterface.digitalWrite( PLAYER_BUTTONS,  2000 ); // PLAYER_BUTTONS
onmessage = function ( event ) {
    if ( event.data.command === 'digitalWrite' ) {
        cppInterface.digitalWrite( event.data.pin_name, event.data.pin_value );
        if ( event.data.release_value ) {    
            loop( 1 );
            cppInterface.digitalWrite( event.data.pin_name, event.data.release_value );
        }
        loop( 1 )
    } else {
        loop( 1 );
    }
}
loop( 1 );

function loop( numberOfLoops ) {
    console.log( "entering while loop..." );
    iterations = 0;
    while ( iterations < numberOfLoops ) {
        let player_button_value = cppInterface.digitalRead( PLAYER_BUTTONS );
        console.log( "player button value: " + player_button_value );
        if ( player_button_value < 1000 ) {
            console.log( "pin PLAYER_BUTTONS is low!" ); 
        } else {
            console.log( "pin PLAYER_BUTTONS is back to normal." );
        }    
        cppInterface.gameLoop();
        // postMessage( cppInterface.getPinMap() );
        iterations++;
    } 
}





