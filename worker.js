//address of native addon 
const addon = require('../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node'); 
//Calling functions of native addon 
// var result = add( 3,4 ); 
//console.log(result);
//communicating with main process of electron app.
let iterations = 0;
var cppInterface = new addon.CppInterface( 42 );
while ( iterations < 10 ) {
    var result = cppInterface.digitalRead( 1 )
    postMessage( "value of pin zero from cpp interface: " + result );
    postMessage( "writing value " + ++iterations + " to pin zero..." );
    cppInterface.digitalWrite( 1, iterations );
}    