/*!
* entellus.js <chat server based on node.js and socket.io>
* zires <zshuaibin@gmail.com>
* MIT Licensed
*/


/*
 * Hold socket.io
 * */
var socket = require('socket.io');
exports.socket = socket;

/*
 * Listen method calls the socket.io#listen
 * Check socket.io api for more details 
 * */
exports.listen = function(server, options, fn){
  socket.listen(server, options, fn);
}

