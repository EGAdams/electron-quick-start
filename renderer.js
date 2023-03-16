// 
// renderer.js  Sets up event handlers for html page
//
const jquery = require( 'jquery' );
console.log( "creating new messagePoster object..." );
let messagePoster = new Worker( '../worker.js' );
messagePoster.onmessage = function ( _event ) { /* console.log( "messagePoster.onmessage: " + event.data ); */ }
messagePoster.onerror = function ( event ) { console.log( event.message, event ); messagePoster.terminate(); };

jquery( document ).ready( function () {
    jquery( '.player1_button' ).click( function () {
        console.log( "player1_button clicked!" );
        messagePoster.postMessage({ 'command': 'digitalWrite', 'pin_name': 202, 'pin_value': 25, 'release_value': 2000 });
    });
    jquery( '.player2_button' ).click( function () {
        console.log( "player2_button clicked!" );
        messagePoster.postMessage( { 'command': 'digitalWrite', 'pin_name': 202, 'pin_value': 600, 'release_value': 2000 } );
    });
    jquery( '.undo_button' ).click( function () {
        console.log( "undo_button clicked!" );
        messagePoster.postMessage( { 'command': 'digitalWrite', 'pin_name': 39, 'pin_value': 0, 'release_value': 1 } );
        jquery( '.reset_button' ).click( function () {
            console.log( "reset_button clicked!" );
            messagePoster.postMessage( { 'command': 'digitalWrite', 'pin_name': 38, 'pin_value': 0, 'release_value': 1 } );
        });
    });
    jquery( '.start_test_button' ).click( function () { tester = new Tester( messagePoster     ); tester.start();   }); 
    jquery( '.player1_win_game' ).click( function () {  winner = new WinGame( 1, messagePoster ); winner.execute(); }); 
    jquery( '.player2_win_game' ).click( function () {  winner = new WinGame( 2, messagePoster ); winner.execute(); }); 

}); // end onReady()  