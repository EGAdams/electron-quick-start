// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const addon = require( '../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node' );
const jquery = require( 'jquery' );
console.log( "creating new worker object..." );
var worker = new Worker( './worker.js' );
worker.onmessage = function ( event ) {
    console.log( "worker.onmessage: " + event.data );
    for ( const key in event.data) {
        var pinData     = {};
        pinData.pin_address = key;
        pinData.pin_value   = event.data[ key ];
        ledObservers.update( pinData );
    }
}
worker.onerror = function ( event ) {
    console.log( event.message, event );
    worker.terminate();
};

jquery( document ).ready( function () {
    jquery( '.player1_button' ).click( function () {
        console.log( "player1_button clicked!" );
        worker.postMessage( { 'command': 'digitalWrite', 'pin_name': 202, 'pin_value': 25, 'release_value': 2000 } );
    });
});    