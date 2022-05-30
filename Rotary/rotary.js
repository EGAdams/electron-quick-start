//const $ = require( 'jquery' );
var id = 'test';
var labels = [ 1, 2, 3, 4 ];

/* Radius of the circle. */
var r = 30;

// rotarySwitch( id, r, labels );

// function rotarySwitch( id, r, l ) {
//     $( "body" ).append(
//         "<div id='rotary-container-" + id + "' class='rotary-container' " +
//         "style='width:" + r * 2 + "px;height:" + r * 2 + "px;'>" +
//         "<div id='rotary-switch-" + id + "' class='rotary-switch'>" +
//         "<div class='arrow-up'></div>" +
//         "</div>" +
//         "</div>"
//     );

//     /* Generate the positions of the switches' labels. */
//     for ( var i = 0; i < l.length; i++ ) {
//         var x = ( r - 5 ) - ( r + 10 ) * Math.cos( 2 * Math.PI * i / l.length );
//         var y = ( r - 5 ) - ( r + 10 ) * Math.sin( 2 * Math.PI * i / l.length );

//         $( ".rotary-container" ).append(
//             "<div class='point' id='" + id + "-" + i + "' " +
//             "style='left:" + Math.round( y ) + "px;top:" + Math.round( x ) + "px'>" + l[ i ] +
//             "</div>"
//         );
//     }
// }


function setMode1() {
    var args = {
        query: `update wp_commands set pin_data='LOW'`,
        trigger: "",
        thisObject: {}
    };
    args = {
        query: `update wp_commands set command_args='25' where pin_name='15'`,
        trigger: "",
        thisObject: {}
    };
}

function setMode2() {
    var args = {
        query: `update wp_commands set pin_data='LOW'`,
        trigger: "",
        thisObject: {}
    };
    args = {
        query: `update wp_commands set command_args='400' where pin_name='15'`,
        trigger: "",
        thisObject: {}
    };
}

function setMode3() {
    var args = {
        query: `update wp_commands set pin_data='LOW'`,
        trigger: "",
        thisObject: {}
    };
    args = {
        query: `update wp_commands set command_args='600' where pin_name='15'`,
        trigger: "",
        thisObject: {}
    };
}

function setMode4() {
    var args = {
        query: `update wp_commands set pin_data='LOW'`,
        trigger: "",
        thisObject: {}
    };
    args = {
        query: `update wp_commands set command_args='775' where pin_name='15'`,
        trigger: "",
        thisObject: {}
    };
}


//TODO Remove static values.
var x0 = r - 5;
var y0 = r - 5;

//TODO Make click degrees relative to the correct switch.
// $( '.point' ).click( function () {

//     /* Highlights the selected point. */
//     $( this ).parent().find( '.point' ).removeClass( 'selected' );
//     $( this ).addClass( 'selected' );

//     /* Get the position of the point. */
//     var pos = $( this ).position();
//     console.log( "pos left: " + pos.left + ", pos top: " + pos.top );

//     if ( pos.left == 55 && pos.top == -15 ) {
//         setMode1();
//     } // mode 1
//     if ( pos.left == -15 && pos.top == 55 ) {
//         setMode2();
//     } // mode 2
//     if ( pos.left == 55 && pos.top == 125 ) {
//         setMode3();
//     } // mode 3
//     if ( pos.left == 125 && pos.top == 55 ) {
//         setMode4();
//     } // mode 4

//     /* Calculate the degree in relation to the point and control rotation direction. */
//     var deg = Math.atan( ( pos.left - y0 ) / ( x0 - pos.top ) ) * 180 / Math.PI;
//     if ( x0 < pos.top ) deg = Math.atan( ( pos.left - y0 ) / ( pos.top - x0 ) ) * -180 / Math.PI + 180;

//     /* Controls the direction of the rotation. */
//     deg = ( deg < 0 ) ? deg + 360 : deg;
//     deg = ( deg > 180 ) ? deg - 360 : deg;
//     deg = Math.round( deg );

//     /* Rotates the switch. */
//     $( this ).parent().find( '.rotary-switch' ).css( {
//         '-webkit-transform': 'rotate(' + deg + 'deg)',
//         '-moz-transform': 'rotate(' + deg + 'deg)',
//         '-ms-transform': 'rotate(' + deg + 'deg)',
//         '-o-transform': 'rotate(' + deg + 'deg)',
//         'transform': 'rotate(' + deg + 'deg)'
//     } );
// } );

// $( '#test-0' ).addClass( 'selected' ); // show that mode 1 is selected

const currentDocument = document.currentScript.ownerDocument;

class Rotary extends HTMLElement {
    constructor() {
        // If you define a constructor, always call super() first as it is required by the CE spec.
        super();

        // Setup a click listener on <user-card>
        this.addEventListener( 'click', e => {
            this.toggleCard();
            alert( "clicked." );
        } );
        console.log( "inside constructor" );
    }
    // Called when element is inserted in DOM
    connectedCallback() {
        const shadowRoot = this.attachShadow( {
            mode: 'open'
        } );

        

        // Select the template and clone it. Finally attach the cloned node to the shadowDOM's root.
        // Current document needs to be defined to get DOM access to imported HTML
        const template = currentDocument.querySelector( '#rotary-template' );
        const instance = template.content.cloneNode( true );
        shadowRoot.appendChild( instance );

        // Extract the attribute user-id from our element.
        // Note that we are going to specify our cards like:
        // <user-card user-id="1"></user-card>
        // const userId = this.getAttribute('user-id');

        // Fetch the data for that user Id from the API and call the render method with this data
        // fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        //   .then((response) => response.text())
        //   .then((responseText) => {
        //     this.render(JSON.parse(responseText));
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
    }

    render() {
    //     this.shadowRoot.querySelector( '.card__full-name' ).innerHTML = userData.name;
    //     this.shadowRoot.querySelector( '.card__user-name' ).innerHTML = userData.username;
    //     this.shadowRoot.querySelector( '.card__website' ).innerHTML = userData.website;
    //     this.shadowRoot.querySelector( '.card__address' ).innerHTML = `<h4>Address</h4>
    //   ${userData.address.suite}, <br />
    //   ${userData.address.street},<br />
    //   ${userData.address.city},<br />
    //   Zipcode: ${userData.address.zipcode}`
    //   this.shadowRoot.querySelector( '.card__phone' ).innerHTML = `<h4>Phone</h4>
        console.log( "rendering... " ); 
        // $( this.shadowRoot.querySelector( 'body' )).append(
        //     "<div id='rotary-container-" + id + "' class='rotary-container' " +
        //     "style='width:" + r * 2 + "px;height:" + r * 2 + "px;'>" +
        //     "<div id='rotary-switch-" + id + "' class='rotary-switch'>" +
        //     "<div class='arrow-up'></div>" +
        //     "</div>" +
        //     "</div>"
        // );
    }


}

customElements.define( 'rotary-switch', Rotary );