/** @class WaitForCondition */
class WaitForCondition {
    constructor( condition, timeout ) {
        this.condition = condition;
        this.timeout = timeout;
        this.POLL_TIME = 250; }

    async wait() {
        let endTime = new Date().getTime() + this.timeout;
        while ( new Date().getTime() <= endTime ) {
            if ( this.condition() ) { return true; }
            await this.sleep( this.POLL_TIME ); }
        return false; }

    sleep = m => new Promise( r => setTimeout( r, m ) )
    setPollTime( new_value ) { this.POLL_TIME = new_value; }

    waitForElement( selector ) {
        return new Promise( resolve => {
            if ( document.querySelector( selector ) ) {
                return resolve( document.querySelector( selector ) );
            }

            const observer = new MutationObserver( _mutations => {
                if ( document.querySelector( selector ) ) {
                    resolve( document.querySelector( selector ) );
                    observer.disconnect(); }});

            observer.observe( document.body, {
                childList: true,
                subtree: true });
        });
    }
}