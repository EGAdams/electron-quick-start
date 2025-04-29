const PinState = require( '../PinState' );
const pinState = new PinState();
/** @class RemoteCodeTranslator */
class RemoteCodeTranslator {
    constructor() {}

    translatePinWrite( remoteCode ) {
        console.log( "translating remote code [ " + remoteCode + "]" );
        switch ( remoteCode ) {
            case RED_REMOTE_RED_SCORE:
                pinState.analogWrite( "REMOTE_DATA_0", 1 );
                pinState.analogWrite( "REMOTE_DATA_1", 1 );
                pinState.analogWrite( "REMOTE_DATA_2", 1 );
                pinState.analogWrite( "REMOTE_DATA_3", 0 );
                break;

            case RED_REMOTE_GREEN_SCORE:
                pinState.analogWrite( "REMOTE_DATA_0", 1 );
                pinState.analogWrite( "REMOTE_DATA_1", 1 );
                pinState.analogWrite( "REMOTE_DATA_2", 0 );
                pinState.analogWrite( "REMOTE_DATA_3", 1 );
                break;

            case RED_REMOTE_RESET:
                pinState.analogWrite( "REMOTE_DATA_0", 1 );
                pinState.analogWrite( "REMOTE_DATA_1", 0 );
                pinState.analogWrite( "REMOTE_DATA_2", 1 );
                pinState.analogWrite( "REMOTE_DATA_3", 1 );
                break;

            case GREEN_REMOTE_GREEN_SCORE:
                console.log( "translating remote code [ " + remoteCode + "]" );
                pinState.analogWrite( "REMOTE_DATA_0", 0 );
                pinState.analogWrite( "REMOTE_DATA_1", 1 );
                pinState.analogWrite( "REMOTE_DATA_2", 1 );
                pinState.analogWrite( "REMOTE_DATA_3", 0 );
                break;

            case GREEN_REMOTE_RED_SCORE:
                console.log( "translating remote code [ " + remoteCode + "]" );
                pinState.analogWrite( "REMOTE_DATA_0", 0 );
                pinState.analogWrite( "REMOTE_DATA_1", 1 );
                pinState.analogWrite( "REMOTE_DATA_2", 0 );
                pinState.analogWrite( "REMOTE_DATA_3", 1 );
                break;

            case GREEN_REMOTE_RESET:
                console.log( "translating remote code [ " + remoteCode + "]" );
                pinState.analogWrite( "REMOTE_DATA_0", 0 );
                pinState.analogWrite( "REMOTE_DATA_1", 0 );
                pinState.analogWrite( "REMOTE_DATA_2", 1 );
                pinState.analogWrite( "REMOTE_DATA_3", 1 );
                break;

            case UNKNOWN_REMOTE_BUTTON:
                console.log( "translating remote code [ " + remoteCode + "]" );
                pinState.analogWrite( "REMOTE_DATA_0", 1 );
                pinState.analogWrite( "REMOTE_DATA_1", 1 );
                pinState.analogWrite( "REMOTE_DATA_2", 1 );
                pinState.analogWrite( "REMOTE_DATA_3", 1 );
                break;
        }
    }
}