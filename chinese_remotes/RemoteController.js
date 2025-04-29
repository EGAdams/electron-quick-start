// require("./defines.js");
/** @class RemoteController */
class RemoteController {
    constructor() {}

    remoteEventHandler( button_event ) {
        switch ( button_event ) {
            case RED_REMOTE_RED_SCORE:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case RED_REMOTE_GREEN_SCORE:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case RED_REMOTE_UNDO:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case RED_REMOTE_RESET:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case GREEN_REMOTE_GREEN_SCORE:
                console.log( console.log( Number( button_event ).toString( 2 )));
                console.log( "button event: " + button_event );
                break;
            case GREEN_REMOTE_RED_SCORE:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case GREEN_REMOTE_UNDO:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
            case GREEN_REMOTE_RESET:
                console.log( "button event: " + button_event );
                console.log( console.log( Number( button_event ).toString( 2 )));
                break;
        }
    }
}
