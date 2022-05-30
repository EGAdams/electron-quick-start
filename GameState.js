/*
 *  class GameState
 */
const jQuery = require( 'jquery' );
const fs     = require( 'fs'     );
class GameState {
    constructor( game_state_path_arg ) { this.game_state_path = game_state_path_arg; }

    update() {
        let game_state_file_data;
        try {
            game_state_file_data = fs.readFileSync( this.game_state_path, 'utf8' ).trim();
        } catch ( err ) { console.error( err ); }

        let game_state_data = JSON.parse( game_state_file_data );
        for ( let key in game_state_data ) {
            jQuery( `.${ key }` ).html( 
                `<table class="fixed">
                    <tr>
                        <td>${ key }</td>
                        <td>${ game_state_data[ key ] }</td>
                </table>`
            ); }}
}

module.exports = GameState;