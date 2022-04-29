// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const addon = require( '../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node' );
const jquery = require( 'jquery' );

var worker = new Worker( './worker.js' );
worker.onmessage = function ( event ) {
    console.log( "worker : ", event.data );
    document.querySelector( 'h1' ).innerHTML = event.data;
    //worker.terminate();
    console.log( "jquery innerHTML: " + jquery( 'h1' ).html() );
}
worker.onerror = function ( event ) {
    console.log( event.message, event );
};