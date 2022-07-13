


// describe( "Player", function () {
    // var player;
    // var song;

    //beforeEach( function () {
    // player = new Player();
    // song = new Song();
    //     console.log( "before each called here." );
    // });

    // it( "should increase players 3 points.", function ( done ) {

    //     $( ".player1_button" ).trigger( "click" );
        
    //     //await new Promise(resolve => setTimeout(resolve, 1000));
    //     var POLL_TIME = 250;
    //     var endTime = new Date().getTime() + 8000;

    //     var checkCondition = function ( selector_string ) {
    //         if ( new Date().getTime() <= endTime && !$( selector_string ) ) {
    //             console.log( "conditions not met.  calling setTimeout again..." );
    //             setTimeout( checkCondition, POLL_TIME );
    //         } else {
    //             // expect( $( '.red_point_4' ).hasClass( 'led-red-on' ) ).toEqual( true );
    //             // expect( $( '.green_point_4' ).hasClass( 'led-green-on' ) ).toEqual( true );
    //             console.log( "conditions met.  calling done()..." );
    //             // expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
    //             // expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
    //             done();
    //         }
    //     };

    //     checkCondition( "'.red_point_1.led-red-on'" );

    //     $( ".player1_button" ).trigger( "click" );
    //     //await new Promise(resolve => setTimeout(resolve, 1000));
      
    //     endTime = new Date().getTime() + 8000;

    //     var checkCondition = function () {
    //         if ( new Date().getTime() <= endTime && !$( '.red_point_1' ).hasClass( 'led-red-on' ) ) {
    //             console.log( "conditions not met.  calling setTimeout again..." );
    //             setTimeout( checkCondition, POLL_TIME );
    //         } else {
    //             expect( $( '.red_point_4' ).hasClass( 'led-red-on' ) ).toEqual( true );
    //             expect( $( '.green_point_4' ).hasClass( 'led-green-on' ) ).toEqual( true );
    //             console.log( "conditions met.  calling done()..." );
    //             expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
    //             expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
    //             done();
    //         }
    //     };
    //     checkCondition();

    //     const waitCondition = new WaitForCondition( function() {
    //         return $( '.red_point_4' ).hasClass( 'led-red-on' ); }, 60000 );

    //     waitCondition.waitForElement( '.red_point_4.led-red-on' ).then( function( _element ) {
    //         console.log( "element found." )    
    //     });
        
    //     function timeout(ms) {
    //         return new Promise(resolve => setTimeout(resolve, ms));
    //     }
    //     async function sleep(fn, ...args) {
    //         await timeout(3000);
    //         return fn(...args);
    //     }

    //     sleep(function( args ) {
    //         console.log( args );
    //     });

        

        // check cover length on select
        //$(document).on('change', '#select', function(){ checkLengthSelect.call(this) } );

        // force a change event to fire with empty value.
        //$('#select').val('').change();

//         var POLL_TIME = 250;
//         var endTime = new Date().getTime() + 8000;

//         var checkCondition = function () {
//             if ( new Date().getTime() <= endTime && !$( '.red_point_4' ).hasClass( 'led-red-on' ) ) {
//                 console.log( "conditions not met.  calling setTimeout again..." );
//                 setTimeout( checkCondition, POLL_TIME );
//             } else {
//                 expect( $( '.red_point_4' ).hasClass( 'led-red-on' ) ).toEqual( true );
//                 expect( $( '.green_point_4' ).hasClass( 'led-green-on' ) ).toEqual( true );
//                 console.log( "conditions met.  calling done()..." );
//                 expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
//                 expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "3" );
//                 done();
//             }
//         };
//         checkCondition();

//     } );

//     it( "should make player 1 4th LED blink.", function ( done ) {
//         $( ".player1_button" ).trigger( "click" ); // player 1 scores
//         var POLL_TIME = 250;
//         var endTime = new Date().getTime() + 8000;

//         var checkCondition = function () {
//             if ( new Date().getTime() <= endTime && $( ".player_1_points" ).find( 'td' ).next().text() != "99" ) {
//                 console.log( "conditions not met.  calling setTimeout again..." );
//                 setTimeout( checkCondition, POLL_TIME );
//             } else {
//                 expect( $( ".player_1_points" ).find( 'td' ).next().text() ).toBe( "99" );
//                 console.log( "conditions met.  calling done()..." );
//                 done();
//             }
//         };
//         checkCondition();
//     } );
// } );

// it( "should be able to play a Song", function () {
// player.play(song);
// expect(player.currentlyPlayingSong).toEqual(song);

//demonstrates use of custom matcher
// expect(player).toBePlaying(song);
// for ( var i = 0; i < 22; i++ ) {
// $( ".player1_button" ).trigger( "click" ); }
// for ( i = 0; i < 26; i++ ) {
// $( ".player2_button" ).trigger( "click" ); }
// for ( var i = 0; i < 4; i++ ) {
// $( ".player1_button" ).trigger( "click" ); }
// } );

// describe( "when song has been paused", function () {
//     beforeEach( function () {
//         player.play( song );
//         player.pause();
//     } );

//     it( "should indicate that the song is currently paused", function () {
//         expect( player.isPlaying ).toBeFalsy();

//         // demonstrates use of 'not' with a custom matcher
//         expect( player ).not.toBePlaying( song );
//     } );

//     it( "should be possible to resume", function () {
//         player.resume();
//         expect( player.isPlaying ).toBeTruthy();
//         expect( player.currentlyPlayingSong ).toEqual( song );
//     } );
// } );

// demonstrates use of spies to intercept and test method calls
// it( "tells the current song if the user has made it a favorite", function () {
//     spyOn( song, 'persistFavoriteStatus' );

//     player.play( song );
//     player.makeFavorite();

//     expect( song.persistFavoriteStatus ).toHaveBeenCalledWith( true );
// } );

//demonstrates use of expected exceptions
// describe( "#resume", function () {
//     it( "should throw an exception if song is already playing", function () {
//         player.play( song );

//         expect( function () {
//             player.resume();
//         } ).toThrowError( "song is already playing" );
//     } );
// } );