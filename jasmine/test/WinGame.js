/** class WinGame */
class WinGame {
    constructor( playerArg, messagePosterArg ) {
        this.player = playerArg;
        this.messagePoster = messagePosterArg;
        this.NUMBER_OF_CLICKS_TO_WIN = 4; }

    execute() {
        console.log( "WinGame.execute() called." );
        console.log( "player: " + this.player );
        if ( this.player === 1 ) {
            for( let i = 0; i < this.NUMBER_OF_CLICKS_TO_WIN; i++ ) {
                this.messagePoster.postMessage({ 'command': 'digitalWrite', 
                                                'pin_name': 202, 
                                                'pin_value': 25, 'release_value': 2000 })};
        } else {
            for( let i = 0; i < this.NUMBER_OF_CLICKS_TO_WIN; i++ ) {
                this.messagePoster.postMessage( { 'command': 'digitalWrite', 
                                                'pin_name': 202, 
                                                'pin_value': 600, 'release_value': 2000 })}; }}} // end class WinGame