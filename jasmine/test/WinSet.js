/** class WinSet */
class WinSet {
    constructor( playerArg, messagePosterArg ) {
        this.player = playerArg;
        this.messagePoster = messagePosterArg;
        this.NUMBER_OF_GAMES_TO_WIN_SET = 6; }

    execute() {
        console.log( "WinSet.execute() called." );
        console.log( "player: " + this.player );
        let gameWinner = new WinGame( this.player, this.messagePoster );
        for( let i = 0; i < this.NUMBER_OF_GAMES_TO_WIN_SET; i++ ) { gameWinner.execute();}}} // end class WinSet