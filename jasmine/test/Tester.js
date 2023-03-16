/*
 * Tester.js
 */
class Tester {
    constructor( messagePosterArg ) {
        this.messagePoster = messagePosterArg;
        this.PLAYER_ONE = 1;
        this.PLAYER_TWO = 2;
    }
    start() {
        let setWinner  = new WinSet( this.PLAYER_ONE, this.messagePoster ); setWinner.execute();
        let player2GameWinner = new WinGame( this.PLAYER_TWO, this.messagePoster ); 
        for( let i = 0; i < 4; i++ ) { player2GameWinner.execute(); } // win 4 games
        let player1GameWinner = new WinGame( this.PLAYER_ONE, this.messagePoster );
        for( let i = 0; i < 4; i++ ) { player1GameWinner.execute(); } // win 4 games
    }
}