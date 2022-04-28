//address of native addon 
const addon = require('../node-addon-examples/6_object_wrap/node-addon-api/build/Release/addon.node'); 
//Calling functions of native addon 
// var result = add( 3,4 ); 
//console.log(result);
//communicating with main process of electron app.

var cppInterface = new addon.CppInterface(10);
var result = cppInterface.plusOne();
postMessage( result );