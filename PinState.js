/** @class PinState */
const fs = require('fs');
class PinState {
    constructor( ledObservers ) { 
        console.log( "constructing PinState..." ); 
        this._ledObservers = ledObservers; 
        this.pin_file_path = "C:\\Users\\EG\\Desktop\\2022\\june\\2nd_week\\tennis_cpp\\pin_data\\"; }

    updateLedPinData() {
        for ( const key in this._ledObservers[ 'observers' ]) {
            let pinData = {};
            pinData.pin_address = this._ledObservers[ 'observers' ][ key ].pin_address;
            try {
                pinData.pin_value = fs.readFileSync( this.pin_file_path + pinData.pin_address + ".txt", 'utf8' ).trim();
            } catch ( err ) {
                console.error( err ); }
            if ( !pinData ) {
                console.error( "pinData is undefined!" );
                return;
            }    
            this._ledObservers.update( pinData ); }}

    writeDigitalPin( pin_address, pin_value ) { 
        try {
            fs.writeFileSync( this.pin_file_path + pin_address + ".txt", pin_value + "" );
        } catch ( err ) { console.error( err ); }}
}

module.exports = PinState;  
