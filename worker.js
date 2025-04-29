//
// worker.js  waits for messages from html page
//
const { Event } = require( 'jquery' );  //address of native addon below
const addon = require( 'C:\\Users\\NewUser\\tennis_cpp\\build\\Debug\\addon.node' );
// const addon = require( '/home/adamsl/tennis_cpp/build/Debug/addon.node' );
console.log( "entered worker.js" );//communicating with main process of electron app.
let iterations = 0;
const PLAYER_BUTTONS = 202;
let cppInterface = new addon.CppInterface( 42 );
cppInterface.digitalWrite( 38,              1    ); // RESET
cppInterface.digitalWrite( 39,              1    ); // UNDO
cppInterface.digitalWrite( PLAYER_BUTTONS,  2000 ); // PLAYER_BUTTONS

const REMOTE_DATA_0            = 10000;
const REMOTE_DATA_1            = 20000;
const REMOTE_DATA_2            = 30000;
const REMOTE_DATA_3            = 40000;

onmessage = function ( event ) {
    if ( event.data.command === 'digitalWrite' ) {
        cppInterface.digitalWrite( event.data.pin_name, event.data.pin_value );
        if ( event.data.release_value ) {    
            loop( 1 );
            cppInterface.digitalWrite( event.data.pin_name, event.data.release_value );
        }
        loop( 1 )
    } else { loop( 1 ); }}

loop( 1 );  // loop regardless

function loop( numberOfLoops ) {
    console.log( "entering loop..." );
    console.log( "setting timeout for remote data reads... " );
    setInterval( function() {
        let remote_data_0 = cppInterface.digitalRead( REMOTE_DATA_0 );
        let remote_data_1 = cppInterface.digitalRead( REMOTE_DATA_1 );
        let remote_data_2 = cppInterface.digitalRead( REMOTE_DATA_2 );
        let remote_data_3 = cppInterface.digitalRead( REMOTE_DATA_3 );

        console.log( "remote_data_0: " + remote_data_0 );
        console.log( "remote_data_1: " + remote_data_1 );
        console.log( "remote_data_2: " + remote_data_2 );
        console.log( "remote_data_3: " + remote_data_3 );
        console.log( " " );
        console.log( " " );

        cppInterface.gameLoop();
    }, 1000 );
        
        iterations++; // loop forever if iterations don't increase.
    }
