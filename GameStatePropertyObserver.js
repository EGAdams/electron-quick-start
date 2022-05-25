/*
 * GameStatePropertyObserver.js
 */

class GameStatePropertyObserver {
    constructor( propertyAddressArg ) { 
        this.propertyAddress = propertyAddressArg;
     }

    update( event ) {
        if ( !event ) { console.error( "event is undefined!" ); return; }
        
        if ( event.propertyAddress == this.propertyAddress ) {
            console.log( "GameStatePropertyObserver update: " + event.propertyAddress + " = " + event.propertyValue );
        }
    }
}
