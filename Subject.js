/*
 *  class Subject
 */
class Subject {
    constructor() { this.observers = []; }

    addObserver( observer ) { this.observers.push( observer ); }

    removeObserver( observer ) {
        this.observers = this.observers.filter( function ( o ) {
            return o !== observer; }); }

    notifyObservers( event ) {
        this.observers.forEach( function ( observer ) {
            observer.update( event );
        }); }

    update( event ) {
        this.notifyObservers( event ); }
}
