/*
 *    GameLed
 */
const jQuery = require( 'jquery' );
class GameLed {
    constructor( pin_address_arg, class_id_arg, css_on_class_arg, css_off_class_arg  ) {
        this.class_id      = class_id_arg;
        this.pin_address   = pin_address_arg;
        this.css_on_class  = css_on_class_arg;
        this.css_off_class = css_off_class_arg;
        this.isOn          = false;
        this.pin_value     = "LOW"; }

    update( pinData ) {
        if( pinData.pin_address == this.pin_address ) {
            if( pinData.pin_value == "1" ) {
                this.turnOn();
            } else {
                this.turnOff();
            }}}

    turnOn() {
        this.isOn = true;
        this.pin_value = "ON"; 
        jQuery( `.${this.class_id}` ).addClass( this.css_on_class );
        jQuery( `.${this.class_id}` ).removeClass( this.css_off_class ); }

    turnOff() {
        this.isOn = false;
        this.pin_value = "OFF"; 
        jQuery( `.${this.class_id}` ).addClass( this.css_off_class );
        jQuery( `.${this.class_id}` ).removeClass( this.css_on_class ); }

}
