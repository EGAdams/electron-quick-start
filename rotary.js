const $ = require( 'jquery' );
let id = 'test';
let labels = [ 1, 2, 3, 4 ];

/* Radius of the circle. */
let r = 30;

rotarySwitch( id, r, labels );

function rotarySwitch( id, r, l ) {
    $( "#test" ).append(
        "<div id='rotary-container-" + id + "' class='rotary-container' " +
        "style='width:" + r * 2 + "px;height:" + r * 2 + "px;'>" +
        "<div id='rotary-switch-" + id + "' class='rotary-switch'>" +
        "<div class='arrow-up'></div>" +
        "</div>" +
        "</div>"
    );

    /* Generate the positions of the switches' labels. */
    for ( let i = 0; i < l.length; i++ ) {
        let x = ( r - 5 ) - ( r + 10 ) * Math.cos( 2 * Math.PI * i / l.length );
        let y = ( r - 5 ) - ( r + 10 ) * Math.sin( 2 * Math.PI * i / l.length );

        $( ".rotary-container" ).append(
            "<div class='point' id='" + id + "-" + i + "' " +
            "style='left:" + Math.round( y ) + "px;top:" + Math.round( x ) + "px'>" + l[ i ] +
            "</div>"
        );
    }
}

function setMode1() { 
    pinState.writeDigitalPin( "ROTARY", 25  ); 
    worker.postMessage( { 'command': 'just loop...', 'pin_name': 15, 'pin_value': 25, 'release_value': 1 } );
}
function setMode2() { 
    pinState.writeDigitalPin( "ROTARY", 400 ); 
    worker.postMessage( { 'command': 'just loop...', 'pin_name': 15, 'pin_value': 400, 'release_value': 1 } );
}
function setMode3() { 
    pinState.writeDigitalPin( "ROTARY", 600 ); 
    worker.postMessage( { 'command': 'just loop...', 'pin_name': 15, 'pin_value': 400, 'release_value': 1 } );
}
function setMode4() { 
    pinState.writeDigitalPin( "ROTARY", 775 ); 
    worker.postMessage( { 'command': 'just loop...', 'pin_name': 15, 'pin_value': 400, 'release_value': 1 } );
}

// TODO Remove static values.
let x0 = r - 5;
let y0 = r - 5;

// TODO Make click degrees relative to the correct switch.
$( '.point' ).click( function () {

    /* Highlights the selected point. */
    $( this ).parent().find( '.point' ).removeClass( 'selected' );
    $( this ).addClass( 'selected' );

    /* Get the position of the point. */
    let pos = $( this ).position();
    console.log( "pos left: " + pos.left + ", pos top: " + pos.top );

    if ( pos.left == 25 && pos.top == -15 ) {
        setMode1();
    } // mode 1
    if ( pos.left == -15 && pos.top == 25 ) {
        setMode2();
    } // mode 2
    if ( pos.left == 25 && pos.top == 65 ) {
        setMode3();
    } // mode 3
    if ( pos.left == 65 && pos.top == 25 ) {
        setMode4();
    } // mode 4
    

    /* Calculate the degree in relation to the point and control rotation direction. */
    let deg = Math.atan( ( pos.left - y0 ) / ( x0 - pos.top ) ) * 180 / Math.PI;
    if ( x0 < pos.top ) deg = Math.atan( ( pos.left - y0 ) / ( pos.top - x0 ) ) * -180 / Math.PI + 180;

    /* Controls the direction of the rotation. */
    deg = ( deg < 0 ) ? deg + 360 : deg;
    deg = ( deg > 180 ) ? deg - 360 : deg;
    deg = Math.round( deg );

    /* Rotates the switch. */
    $( this ).parent().find( '.rotary-switch' ).css( {
        '-webkit-transform': 'rotate(' + deg + 'deg)',
        '-moz-transform': 'rotate(' + deg + 'deg)',
        '-ms-transform': 'rotate(' + deg + 'deg)',
        '-o-transform': 'rotate(' + deg + 'deg)',
        'transform': 'rotate(' + deg + 'deg)'
    });
});

$( '#test-0' ).addClass( 'selected' );  // show the selected mode